import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import IntroScreen from './screens/introScreen.js';
import TasksScreen from './screens/taskScreen.js';

//Or Export this...
const ScreenStack = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TasksScreen }
  },
  {
    headerMode: 'none'
  }
);
//TODO: Delete Header... headerMode: 'none'


export default class App extends Component<Props> {
  render(){
    return <ScreenStack />;
  }
}

/*
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackNavigator from 'react-navigation';
import IntroScreen from './src/screens/introScreen';
import TaskScreen from './src/screens/taskScreen';

const ScreenStack = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Task: { screen: TaskScreen }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component<Props> {
  render() {
    return(
      <ScreenStack/>
    );
  }
}
/*
const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
*/
