/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

class Navigation extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <NavButotn />
                <NavButotn />
                <NavButotn />
                <NavButotn />
            </View>
        )
    }
}


// <View style={{flex: 1, alignItems: 'center', borderWidth: 1}}>
//     <View style={{height: 50, width: 50, backgroundColor: 'gray'}}></View>
// </View>
// <View style={{flex: 1, alignItems: 'center', borderWidth: 1}}>
//     <View style={{height: 50, width: 50, backgroundColor: 'gray'}}></View>
// </View>
// <View style={{flex: 1, alignItems: 'center', borderWidth: 1}}>
//     <View style={{height: 50, width: 50, backgroundColor: 'gray'}}></View>
// </View>

class NavButotn extends Component {
    render() {
        return (
            <View style={styles.navButton}>
                <View style={styles.navButtonLogo}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5
    },
    navButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButtonLogo: {
        height: 50,
        width: 50,
        backgroundColor: 'gray'
    }
});

AppRegistry.registerComponent('Sample', () => Sample);
