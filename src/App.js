import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Index';
import LoginForm from './components/LoginForm';

class App extends Component{
UNSAFE_componentWillMount(){
	firebase.initializeApp({
    apiKey: 'AIzaSyCTxuTgXm9HdqK0mzRaG_QaBfy6EwK7Bjg',
    authDomain: 'authentication-84bac.firebaseapp.com',
    databaseURL: 'https://authentication-84bac.firebaseio.com',
    storageBucket: 'authentication-84bac.appspot.com',
    messagingSenderId: '93079265725',
  });
}
	render(){
		return <View>
		<Header headerText='Authentication'/>
		<LoginForm />
		</View>
	}
}

export default App;