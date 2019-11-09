import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  PixelRatio,
  Alert,
} from 'react-native';

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {connect} from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal';
import Theme from '../uielements/Utility/Colors';
class Home extends Component {
  constructor(props) {
    super(props);
    const elementButton = value => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{value}</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      name: '',
      email: '',
      tableHead: [
        elementButton('Name'),
        elementButton('Country'),
        elementButton('Mobile Number'),
        elementButton('Mobile Brand'),
      ],
      tableTitle: [
        'Title',
        'Title2',
        'Title3',
        'Title4',
        'Title',
        'Title2',
        'Title3',
        'Title4',
        'Title',
        'Title2',
        'Title3',
        'Title4',
        'Title',
        'Title2',
        'Title3',
        'Title4',
        'Title',
        'Title2',
        'Title3',
        'Title4',
        'Title',
        'Title2',
        'Title3',
        'Title4',
      ],
      tableData: [
        [, 'a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
      ],
      isCountryclicked: false,
      value: [
        {key: '1', width: 33, title: 'name'},
        {key: '2', width: 33, title: 'mobileno', sortable: true},
        {key: '3', width: 33, title: 'mobilebrand', sortable: true},
      ],
      field: [
        {name: 'ranjan', mobileno: '9840051137', mobilebrand: 'nokia'},
        {name: 'ranjan', mobileno: '9840051137', mobilebrand: 'nokia'},
        {name: 'ranjan', mobileno: '9840051137', mobilebrand: 'nokia'},
      ],
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
      cca2: 'US',
      confirm_password_error: '',
      country: '',
    };
  }
  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={{marginTop: 30}}>
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
                <Text style={styles.bigtext}>Introcept Survey</Text>
              </View>
            </View>
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
                  height: 45,
                  marginTop: 15,
                  marginLeft: 5,
                  marginRight: 5,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    marginRight: 3,
                    flex: 0.4,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    padding: 10,

                    alignItems: 'center',
                  }}>
                  <TextInput
                    autoCapitalize="none"
                    style={{
                      height: 45,
                      backgroundColor: 'white',
                      padding: 10,
                      fontSize: 18,
                      color: Theme.colors.navyBlue,
                    }}
                    type="string"
                    required
                    placeholder="Country"
                    placeholderTextColor={Theme.colors.navyBlue}
                    onChangeText={mobile_number =>
                      this.setState({mobile_number, error3: false})
                    }
                    value={this.state.mobile_number}
                  />
                </View>
                <View
                  style={{
                    flex: 0.6,
                    backgroundColor: 'red',
                    justifyContent: 'flex-start',
                  }}>
                  <TextInput
                    autoCapitalize="none"
                    style={{
                      height: 45,
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
              }}></View>
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
            <Text style={styles.bigtextdata}> Survey Data</Text>

            <Table borderStyle={{borderWidth: 4, borderColor: '#c8e1ff'}}>
              <Row
                data={this.state.tableHead}
                style={styles.head}
                textStyle={styles.tabletext}
              />
              <Rows data={this.state.tableData} textStyle={styles.tabletext} />
            </Table>

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: Theme.colors.lightBlue,
  },
  inputText: {
    padding: 10,
    height: 45,
    flex: 10,
    fontSize: 18,
    color: Theme.colors.navyBlue,
    backgroundColor: 'white',
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: Theme.colors.red,
    padding: 10,
    margin: 10,
    height: 45,
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
  bigtext: {
    fontSize: 25,
    color: Theme.colors.navyBlue,
    marginTop: 35,
    textAlign: 'center',
  },
  bigtextdata: {
    fontSize: 25,
    color: Theme.colors.navyBlue,
    marginTop: 15,
    marginBottom: 10,

    textAlign: 'center',
  },
  tablecontainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  singleHead: {width: 80, height: 40, backgroundColor: '#c8e1ff'},
  head: {flex: 1, backgroundColor: '#c8e1ff'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  titleText: {marginRight: 6, textAlign: 'right'},
  tabletext: {
    textAlign: 'left',
    color: Theme.colors.navyBlue,
    paddingHorizontal: 4,
  },
  tablebtn: {
    width: 58,
    height: 18,
    marginLeft: 15,
    backgroundColor: '#c8e1ff',
    borderRadius: 2,
  },
  tablebtnText: {textAlign: 'center'},
});

const mapStateToProps = state => {
  return {};
};
export default connect()(Home);
