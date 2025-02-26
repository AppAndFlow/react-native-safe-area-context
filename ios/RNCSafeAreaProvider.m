#import "RNCSafeAreaProvider.h"

#import <React/RCTEventDispatcher.h>
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import "RCTUIManagerObserverCoordinator.h"
#import "RNCSafeAreaUtils.h"
#import "RNCChangeEvent.h"

@interface RNCSafeAreaProvider () <RCTUIManagerObserver>

@end

@implementation RNCSafeAreaProvider {
  id<RCTEventDispatcherProtocol> _eventDispatcher;
  UIEdgeInsets _currentSafeAreaInsets;
  CGRect _currentFrame;
  BOOL _initialInsetsSent;
  uint16_t _coalescingKey;
}

- (instancetype)initWithEventDispatcher:(id<RCTEventDispatcherProtocol>)eventDispatcher
{
    RCTAssertParam(eventDispatcher);
  
    if ((self = [super initWithFrame:CGRectZero])) {
#if !TARGET_OS_TV && !TARGET_OS_OSX
      
    _eventDispatcher = eventDispatcher;

    [NSNotificationCenter.defaultCenter addObserver:self
                                           selector:@selector(invalidateSafeAreaInsets)
                                               name:UIKeyboardDidShowNotification
                                             object:nil];
    [NSNotificationCenter.defaultCenter addObserver:self
                                           selector:@selector(invalidateSafeAreaInsets)
                                               name:UIKeyboardDidHideNotification
                                             object:nil];
    [NSNotificationCenter.defaultCenter addObserver:self
                                           selector:@selector(invalidateSafeAreaInsets)
                                               name:UIKeyboardDidChangeFrameNotification
                                             object:nil];
    [NSNotificationCenter.defaultCenter addObserver:self
                                           selector:@selector(invalidateSafeAreaInsets)
                                               name:UIWindowDidBecomeVisibleNotification
                                             object:nil];
#endif
  }
  return self;
}

- (void)safeAreaInsetsDidChange
{
  [self invalidateSafeAreaInsets];
}

- (void)invalidateSafeAreaInsets
{
  // This gets called before the view size is set by react-native so
  // make sure to wait so we don't set wrong insets to JS.
  if (CGSizeEqualToSize(self.frame.size, CGSizeZero)) {
    return;
  }

#if TARGET_OS_IPHONE
  UIEdgeInsets safeAreaInsets = self.safeAreaInsets;
#elif TARGET_OS_OSX
  NSEdgeInsets safeAreaInsets;
  if (@available(macOS 11.0, *)) {
    safeAreaInsets = self.safeAreaInsets;
  } else {
    safeAreaInsets = NSEdgeInsetsZero;
  }
#endif
  
  CGRect frame = [self convertRect:self.bounds toView:RNCParentViewController(self).view];

  if (_initialInsetsSent &&
#if TARGET_OS_IPHONE
      UIEdgeInsetsEqualToEdgeInsetsWithThreshold(safeAreaInsets, _currentSafeAreaInsets, 1.0 / RCTScreenScale()) &&
#elif TARGET_OS_OSX
      NSEdgeInsetsEqualToEdgeInsetsWithThreshold(safeAreaInsets, _currentSafeAreaInsets, 1.0 / RCTScreenScale()) &&
#endif
      CGRectEqualToRect(frame, _currentFrame)) {
    return;
  }
  _initialInsetsSent = YES;
  _currentSafeAreaInsets = safeAreaInsets;
  _currentFrame = frame;

  [NSNotificationCenter.defaultCenter postNotificationName:RNCSafeAreaDidChange object:self userInfo:nil];

    // There's currently only 1 event name "onInsetsChange", so the _coalescingKey doesn't needs to be incremented
    // Increment _coalescingKey if safeAreaInsets and frame are sent as separate events
    RNCChangeEvent *changeEvent = [[RNCChangeEvent alloc] initWithEventName:@"onInsetsChange"
                                                                   reactTag:self.reactTag
                                                                     insets:safeAreaInsets
                                                                      frame:frame
                                                              coalescingKey:_coalescingKey];
 
  
  [_eventDispatcher sendEvent:changeEvent];
}

- (void)layoutSubviews
{
  [super layoutSubviews];

  [self invalidateSafeAreaInsets];
}

- (void)dealloc
{
  [_eventDispatcher.bridge.uiManager.observerCoordinator removeObserver:self];
}


RCT_NOT_IMPLEMENTED(-(instancetype)initWithFrame : (CGRect)frame)
RCT_NOT_IMPLEMENTED(-(instancetype)initWithCoder : (NSCoder *)aDecoder)

@end
