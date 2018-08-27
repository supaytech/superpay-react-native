package com.superpaydemo;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.recheng.superpay.callback.OnPayResultListener;
import com.recheng.superpay.enums.PayWay;
import com.recheng.superpay.pay.ChengPay;
import com.recheng.superpay.pay.PayParams;
import com.recheng.superpay.utils.LogUtil;

public class SupayAndroidManager extends ReactContextBaseJavaModule {


    public SupayAndroidManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    // ReactContextBaseJavaModule要求派生类实现getName方法。这个函数用于返回一个字符串
    // 这个字符串用于在JavaScript端标记这个原生模块
    @Override
    public String getName() {
        return "SupayAndroidManager";
    }

    /**
     *
     * @param payInfo 支付信息
     * @param payWay 支付路径
     */
    @ReactMethod
    public void pay(String payInfo, String payWay, final Promise info) {
        PayParams.Builder payBuilder = new PayParams.Builder(getCurrentActivity());
        info.reject("returnCode", String.valueOf(0));
        return;
//        switch (payWay) {
//            case "WechatPay":
//                payBuilder.payWay(PayWay.WechatPay);
//                //微信支付包名签名必须和官网一致  请注意!!!
//                payBuilder.wechatAppID("填入你的微信appid");
//                break;
//            case "AliPay":
//                payBuilder.payWay(PayWay.AliPay);
//                break;
//        }
//        PayParams payParams = payBuilder.payInfo(payInfo).build();
//        ChengPay.newInstance(payParams).doPay(new OnPayResultListener() {
//            @Override
//            public void onPaySuccess(PayWay payWay) {
//                LogUtil.i("支付成功 " + payWay.toString());
//                info.reject("returnCode", String.valueOf(0));
//                return;
//            }
//
//            @Override
//            public void onPayCancel(PayWay payWay) {
//                LogUtil.i("支付取消 " + payWay.toString());
//                info.reject("returnCode", String.valueOf(2));
//                return;
//            }
//
//            @Override
//            public void onPayFailure(PayWay payWay, int errCode) {
//                LogUtil.i("支付失败 " + payWay.toString() + errCode);
//                info.reject("returnCode", String.valueOf(errCode));
//                return;
//            }
//        });
    }



}
