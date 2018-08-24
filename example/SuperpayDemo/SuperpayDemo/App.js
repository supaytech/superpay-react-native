/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, NativeModules} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Suppay!</Text>
        <TouchableOpacity onPress={() => {
            NativeModules.SupayManager.createWXPayment('{"appid":"wxeae61855935702fb","noncestr":"f8b3dacef9c146f8a8e55e0f4630be5e","package":"Sign=WXPay","partnerid":"232028432","prepayid":"wx06200512915760d46c7c6ac32367430420","sign":"597ED7F160249C28A26021121DC1C919","timestamp":"1533557113"}', (info)=>{
                if (info.errorCode === 0){
                    console.log('支付成功')
                }else {
                    console.log('Error:',info.errorDes)
                }
                });
        }} style={[styles.paybutton, {backgroundColor:'#03B310'}]}>
            <Text style={styles.instructions}>微信</Text>
        </TouchableOpacity>
          <TouchableOpacity  onPress={() => {
              NativeModules.SupayManager.createAliPayment('{"appid":"wxeae61855935702fb","noncestr":"f8b3dacef9c146f8a8e55e0f4630be5e","package":"Sign=WXPay","partnerid":"232028432","prepayid":"wx06200512915760d46c7c6ac32367430420","sign":"597ED7F160249C28A26021121DC1C919","timestamp":"1533557113"}', (info)=>{
                  if (info.errorCode === 0){
                      console.log('支付成功')
                  }else {
                      console.log('Error:',info.errorDes)
                  }
              });
          }} style={[styles.paybutton, {backgroundColor:'#4ba1e0'}]}>
              <Text style={styles.instructions}>支付宝</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
    paybutton:{
        borderColor:'red',
        borderRadius:4,
        width:200,
        paddingVertical:5,
        marginBottom:10
    }
});
