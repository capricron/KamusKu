/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#000000" />
        <View
          style={{
            backgroundColor: '#2196f3',
            paddingVertical: 15,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              style={{marginRight: 10}}
              name="chevron-left"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#ffff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              elevation: 10,
            }}>
            About
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            About
          </Text>
          <Text
            style={{
              color: '#ffff',
              fontSize: 14,
              marginTop: 10,
              textAlign: 'center',
            }}>
            Ini adalah aplikasi sederhana yang dibuat dengan React Native
          </Text>
        </View>
      </View>
    );
  }
}
export default Home;
