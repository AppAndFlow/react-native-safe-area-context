#import <UIKit/UIKit.h>

#import <React/RCTView.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNCSafeAreaProvider : RCTView

extern NSString * const RNCSafeAreaDidChange;

@property (nonatomic, copy) RCTBubblingEventBlock onInsetsChange;

@end

NS_ASSUME_NONNULL_END
