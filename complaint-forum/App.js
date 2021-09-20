import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteComplaint from './screens/WriteComplaint'
import ReadComplaint from './screens/ReadComplaint'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteComplaint: WriteComplaint,
  ReadComplaint: ReadComplaint
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)

    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

