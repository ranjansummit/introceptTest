import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert
}
  from 'react-native';

import {
  Table,
  Row,
  Rows
}
  from 'react-native-table-component';
import { connect } from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal';
import Theme from '../../uielements/Utility/Colors';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];


class Home extends Component {
  constructor(props) {
    super(props);
    const elementButton = (value,title) => (
<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title} </Text>
        { value==1|| value ==3 ? (

        <TouchableOpacity onPress={() => this._sortData(value)}>
          <Text style={{color: 'red'}}>sort</Text>
        </TouchableOpacity>
        ): null }
      </View>

    );

    this.state = {
      name: '',
      email: '',
      tableHead: [
        elementButton(0,'Name'),
        elementButton(1,'Country'),
        elementButton(2,'Mobile No.'),
        elementButton(3,'Brand'),
      ],
      tableData: [],
      mobile_number: '',
      brand: '',
      confirm_password: '',
      country: 'Nepal',
      checked: false,
      nameError: false,
      mobileError: false,
      brandError: false,
      callingCode: 'NP',
      countryCode: 'NP',

    };
  }

  _onSaveEntryClicked = (name, number, brand) => {

    if (name.length === 0 || brand.length === 0|| number.length === 0)  {
      Alert.alert("Please enter all values properly");
    }
    else {
      this._SaveData()
    }
  }


  // to save data
  _SaveData() {
    var data = this.state.tableData
    data.push([this.state.name, this.state.country, this.state.mobile_number, this.state.brand]);
    this.setState({ tableData: data })
  }

  //  to sort data
  _sortData(value) {
    var data = this.state.tableData
    data.sort((a, b) => a[value].localeCompare(b[value]));
    this.setState({ tableData: data })
  }
  _pickerOnselect= country => {
    this.setState({
      countryCode: country.cca2,
      callingCode: `+ ${country.callingCode}`,
      country: country.name
    });
  }
  

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={{ marginTop: 30 }}>

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
                  onChangeText={name => this.setState({ name, error1: false })}
                  value={this.state.name}
                />
              </View>
         
            </View>

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
                  <CountryPicker
                    withEmoji={false}
                    withCloseButton={false}
                    withFlag={true}
                    countryCode={this.state.countryCode}
                    withFilter={true}
                    theme="black"
                    withCallingCode
                    onSelect={country => {
                      this.setState({
                        countryCode: country.cca2,
                        callingCode: `+ ${country.callingCode}`,
                        country: country.name
                      });
                    }}
                  />

                  <Text style={styles.pickertext}>{this.state.country}
                 
                  </Text>

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
                      this.setState({ mobile_number, error3: false })
                    }
                    value={this.state.mobile_number}
                  />
                </View>
              </View>
              </View>
          
           
            <View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputText}
                  type="string"
                  required
                  placeholder="Brand of the Phone"
                  placeholderTextColor={Theme.colors.navyBlue}
                  onChangeText={brand =>
                    this.setState({ brand, error4: false })
                  }
                  value={this.state.brand}
                />
              </View>
              </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 10,
              }}></View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this._onSaveEntryClicked(
                  this.state.name,
                  this.state.mobile_number,
                  this.state.brand
                )
              }>
              <Text style={styles.buttonText}>Save your Detail</Text>
            </TouchableOpacity>
            <Text style={styles.bigtextdata}> Survey Data</Text>
            <Table borderStyle={{ borderWidth: 4, borderColor: '#c8e1ff' }}>
              <Row
                data={this.state.tableHead}
                style={styles.tableHead}
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
  buttonText: {
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
  tableHead: {
    flex: 1,
    backgroundColor: '#c8e1ff'
  },
  title: {
    flex: 2,
    backgroundColor: '#f6f8fa'
  },
  titleText: {
    marginRight: 6,
    textAlign: 'right'
  },
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
  tablebtnText: {
    textAlign: 'center'
  },
  pickertext: {
    paddingTop: 5,
    color: Theme.colors.navyBlue,
    fontSize: 18
  }
});

const mapStateToProps = state => {
  return {};
};
export default connect()(Home);
