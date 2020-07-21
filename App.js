/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  BackHandler,
} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  backAction = () => {
    if (this.canGoBack) {
      this.webview.goBack();
      return true;
    }
    return false;
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#1E1E24');
      StatusBar.setTranslucent(false);
    }
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler?.remove();
  }

  // https://quedic.com/
  // https://keyujin.com/
  // https://keyujin.cn/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#1E1E24" translucent={false} />
        <WebView
          ref={(r) => (this.webview = r)}
          source={{uri: 'https://quedic.com/'}}
          mixedContentMode={'always'}
          onNavigationStateChange={(navState) => {
            // Keep track of going back navigation within component
            this.canGoBack = navState.canGoBack;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 35,
  },
});

export default App;
