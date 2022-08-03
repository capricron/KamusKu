/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {judul: 'Apel', deskripsi: 'Apel adalah buah berwarna merah'},
        {judul: 'Jeruk', deskripsi: 'Jeruk adalah buah berwarna oranye'},
        {judul: 'Pisang', deskripsi: 'Pisang adalah buah berwarna kuning'},
        {judul: 'Blueberry', deskripsi: 'Blueberry adalah buah berwarna biru'},
        // eslint-disable-next-line prettier/prettier
        {judul: 'Strawberry', deskripsi: 'Strawberry adalah buah berwarna merah'},
        {judul: 'Mangga', deskripsi: 'Mangga adalah buah berwarna kuning'},
        {judul: 'Nanas', deskripsi: 'Nanas adalah buah berwarna kuning'},
        {judul: 'Pepaya', deskripsi: 'Pepaya adalah buah berwarna oranye'},
        {judul: 'Semangka', deskripsi: 'Semangka adalah buah berwarna hijau'},
        {judul: 'Anggur', deskripsi: 'Anggur adalah buah berwarna ungu'},
        {judul: 'Melon', deskripsi: 'Melon adalah buah berwarna hijau'},
        {judul: 'Alpukat', deskripsi: 'Alpukat adalah buah berwarna hijau'},
      ],

      dataTampil: [
        {judul: 'Apel', deskripsi: 'Apel adalah buah berwarna merah'},
        {judul: 'Jeruk', deskripsi: 'Jeruk adalah buah berwarna oranye'},
        {judul: 'Pisang', deskripsi: 'Pisang adalah buah berwarna kuning'},
        {judul: 'Blueberry', deskripsi: 'Blueberry adalah buah berwarna biru'},
        // eslint-disable-next-line prettier/prettier
        {judul: 'Strawberry', deskripsi: 'Strawberry adalah buah berwarna merah'},
        {judul: 'Mangga', deskripsi: 'Mangga adalah buah berwarna kuning'},
        {judul: 'Nanas', deskripsi: 'Nanas adalah buah berwarna kuning'},
        {judul: 'Pepaya', deskripsi: 'Pepaya adalah buah berwarna oranye'},
        {judul: 'Semangka', deskripsi: 'Semangka adalah buah berwarna hijau'},
        {judul: 'Anggur', deskripsi: 'Anggur adalah buah berwarna ungu'},
        {judul: 'Melon', deskripsi: 'Melon adalah buah berwarna hijau'},
        {judul: 'Alpukat', deskripsi: 'Alpukat adalah buah berwarna hijau'},
      ],

      pencarian: '',
    };
  }

  pencarian = () => {
    let data = this.state.data;

    data = data.filter(item => {
      return item.judul
        .toLowerCase()
        .includes(this.state.pencarian.toLowerCase());
    });

    this.setState({dataTampil: data});
  };

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
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#ffff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                elevation: 10,
              }}>
              Home
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}>
            <Icon
              style={{marginRight: 10}}
              name="question-circle"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <TextInput
          value={this.state.pencarian}
          onChangeText={text =>
            this.setState({pencarian: text}, () => this.pencarian())
          }
          style={{
            backgroundColor: '#ffff',
            padding: 10,
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
          placeholder="Masukkan Pencarian"
        />
        <FlatList
          data={this.state.dataTampil}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                padding: 10,
                borderRadius: 5,
                backgroundColor: '#2196f3',
              }}
              onPress={() => this.props.navigation.navigate('Detail', item)}>
              <Text style={{color: '#fff', fontSize: 15}}>{item.judul}</Text>
              <Text style={{color: '#fff'}}>{item.deskripsi}</Text>
            </TouchableOpacity>
          )}
          // keyExtractor={item => item.judul}
        />
      </View>
    );
  }
}

export default Home;
