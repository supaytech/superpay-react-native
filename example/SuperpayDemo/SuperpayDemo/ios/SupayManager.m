//
//  SupayManager.m
//  SuperpayDemo
//
//  Created by z on 2018/8/15.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "SupayManager.h"
#import "SPSDKPay.h"

@implementation SupayManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createWXPayment:(NSString *)charge callback:(RCTResponseSenderBlock)callback)
{
  [SPSDKPay createPayment:charge
           paymentChannel:SPSDKPaymentChannelWX viewController:[UIViewController new] appURLScheme:@"supaysdk" withCompletion:^(NSDictionary *result, SPSDKPayError *error) {
             if (error == nil && [result[@"status"] unsignedIntegerValue] == 200) {
               callback(@[@{@"result": result,
                            @"errorCode": @(0)
                            }]);
             } else {
               callback(@[@{@"errorCode": @(error.code), @"errorDes":[error getMsg]}]);
             }
           }];
}

RCT_EXPORT_METHOD(createAliPayment:(NSString *)charge callback:(RCTResponseSenderBlock)callback)
{
  [SPSDKPay createPayment:charge
           paymentChannel:SPSDKPaymentChannelAliPay viewController:[UIViewController new] appURLScheme:@"supaysdk" withCompletion:^(NSDictionary *result, SPSDKPayError *error) {
             if (error == nil && [result[@"status"] unsignedIntegerValue] == 200) {
               callback(@[@{@"result": result,
                            @"errorCode": @(0)
                            }]);
             } else {
               callback(@[@{@"errorCode": @(error.code), @"errorDes":[error getMsg]}]);
             }
           }];
}
@end
