import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Home from './component_scenes/Home';
import Theme from './uielements/Utility/Colors'



class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" tabs>
          <Scene key="home" component={Home} hideNavBar hideTabBar />  
       </Scene>
         
      </Router>
    );
  }
}
// const styles = StyleSheet.create({
//   navigationBarStyle: {
//     backgroundColor: Theme.colors.navyBlue,
//   },
// });
export default RouterComponent;

