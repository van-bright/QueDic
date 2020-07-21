/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#1E1E24');
      StatusBar.setTranslucent(false);
    }
  }

  // https://quedic.com/
  // https://keyujin.com/
  // https://keyujin.cn/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#1E1E24" translucent={false} />
        <WebView
          source={{uri: 'https://keyujin.cn'}}
          mixedContentMode={'always'}
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
