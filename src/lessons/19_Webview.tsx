import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const Link = () =>{
    return(
        <WebView source={{uri:'https://reactnative.dev/'}}/>
    )
}

export default Link