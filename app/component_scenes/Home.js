
import React, {Component} from 'react';
import {StyleSheet, 
   Text,
   View,
   ScrollView,
   TouchableWithoutFeedback,
   Keyboard,
   TextInput,
   Image,
   TouchableOpacity
  } 
from 'react-native';

import {connect} from 'react-redux';

import Theme from '../uielements/Utility/Colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile_number: '',
      password: '',
      confirm_password: '',
      checked: false,
      error1: false,
      error2: false,
      error3: false,
      error4: false,
      error5: false,
      password_error: '',
      confirm_password_error: '',
    };
    // this.emailAlert = this.emailAlert.bind(this);
    // this.mobileAlert = this.mobileAlert.bind(this);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        {this.props.loading ? <Spinner /> : null}
        {this.props.error ? (
          this.props.error.email ? (
            <View>{this.emailAlert()}</View>
          ) : this.props.error.mobile ? (
            <View>{this.mobileAlert()}</View>
          ) : null
        ) : null}
        {this.props.reg_success === false ? (
          <View>{this.successAlert()}</View>
        ) : null}
        <View style={styles.container}>
          <View>
            <View>
              <TextInput
                style={styles.inputText}
                type="string"
                required
                placeholder="Full Name"
                placeholderTextColor={Theme.colors.navyBlue}
                onChangeText={name => this.setState({name, error1: false})}
                value={this.state.name}
              />
            </View>
            <View style={styles.error}>
              {this.state.error1 ? <ErrorIcon /> : null}
            </View>
          </View>
          {this.state.error1 ? (
            <View style={{justifyContent: 'flex-end', marginRight: 5}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 0.04 * screenWidth,
                  textAlign: 'center',
                  padding: 2,
                  marginTop: 2,
                  marginBottom: 2,
                  marginLeft: '30%',
                  backgroundColor: 'black',
                  borderTopWidth: 5,
                  borderTopColor: 'red',
                }}>
                Please provide your name
              </Text>
            </View>
          ) : null}
         
          <View>
            <View
              style={{
                height: 65,
                marginTop: 15,
                marginLeft: 5,
                marginRight: 5,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginRight: 3,
                  flex: 0.2,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  padding: 10,
            
                  alignItems: 'center',
                }}>
                <Image
      
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    padding: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: Theme.colors.navyBlue,
                  }}>
                  +977
                </Text>
              </View>
              <View
                style={{
                  flex: 0.8,
                  backgroundColor: 'red',
                  justifyContent: 'flex-start',
                }}>
                <TextInput
                  autoCapitalize="none"
                  style={{
                    height: 65,
                    backgroundColor: 'white',
                    padding: 10,
                    fontSize: 18,
                    color: Theme.colors.navyBlue,
                  }}
                  type="string"
                  keyboardType="numeric"
                  required
                  placeholder="Mobile Number"
                  placeholderTextColor={Theme.colors.navyBlue}
                  onChangeText={mobile_number =>
                    this.setState({mobile_number, error3: false})
                  }
                  value={this.state.mobile_number}
                />
              </View>
            </View>
            <View style={styles.error}>
              {this.state.error3 ? <ErrorIcon /> : null}
            </View>
          </View>
          {this.state.error3 ? (
            <View style={{justifyContent: 'flex-end', marginRight: 5}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 0.04 * screenWidth,
                  textAlign: 'center',
                  padding: 2,
                  marginBottom: 2,
                  marginTop: 2,

                  marginLeft: '30%',
                  backgroundColor: 'black',
                  borderTopWidth: 4,
                  borderTopColor: 'red',
                }}>
                Invalid mobile number.
              </Text>
            </View>
          ) : null}
          <View>
            <View>
              <TextInput
                autoCapitalize="none"
                style={styles.inputText}
                type="string"
                required
                placeholder="Brand of the Phone"
                placeholderTextColor={Theme.colors.navyBlue}
                onChangeText={password =>
                  this.setState({password, error4: false})
                }
                value={this.state.password}
              />
            </View>
            <View style={styles.error}>
              {this.state.error4 ? <ErrorIcon /> : null}
            </View>
          </View>
          {this.state.error4 ? (
            <View style={{justifyContent: 'flex-end', marginRight: 5}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 0.04 * screenWidth,
                  textAlign: 'center',
                  padding: 2,
                  marginTop: 2,
                  marginBottom: 2,
                  marginLeft: '30%',
                  backgroundColor: 'black',
                  borderTopWidth: 4,
                  borderTopColor: 'red',
                }}>
                {this.state.password_error}
              </Text>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              marginBottom: 10,
            
            }}>
      
          
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onRegister(
                this.state.name,
                this.state.email,
                this.state.mobile_number,
                this.state.password,
                this.state.confirm_password,
                this.state.checked,
              )
            }>
            <Text style={styles.text}>Save your Detail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
   
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: Theme.colors.lightBlue,
  },
  inputText: {
    padding: 10,
    height: 65,
    flex: 10,
    // borderWidth: 1,
    fontSize: 18,
    color: Theme.colors.navyBlue,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    // marginBottom: 12
  },
  button: {
    justifyContent: 'center',
    backgroundColor: Theme.colors.red,
    padding: 10,
    margin: 10,
    height: 65,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  error: {
    position: 'absolute',
    top: 12,
    right: 30,
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

const mapStateToProps = state => {
  return {};
};
export default connect(
  
  )(Home);
