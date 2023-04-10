import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
import Taro from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {
    // 这里报错:ndors-node_modules_taro_h5_prebundle_chunk-PCJKBR7C_js.js:16636 Uncaught TypeError: _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default(...).request is not a function
    Taro.request({ url: "www.baidu.com" }).then((res) => console.log(res));
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle={true}>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
      </View>
    );
  }
}
