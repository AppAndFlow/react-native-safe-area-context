#import <Foundation/Foundation.h>
#import <React/RCTEventDispatcherProtocol.h>

@interface RNCChangeEvent : NSObject <RCTEvent>

- (instancetype)initWithEventName:(NSString *)eventName
                         reactTag:(NSNumber *)reactTag
                           insets:(UIEdgeInsets)insets
                            frame:(CGRect)frame
                    coalescingKey:(uint16_t)coalescingKey NS_DESIGNATED_INITIALIZER;

@end
