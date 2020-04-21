import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/Index';
import LoginForm from './components/LoginForm';

class App extends Component{

state = { loggedIn: null };

UNSAFE_componentWillMount(){
	firebase.initializeApp({
    apiKey: 'AIzaSyCTxuTgXm9HdqK0mzRaG_QaBfy6EwK7Bjg',
    authDomain: 'authentication-84bac.firebaseapp.com',
    databaseURL: 'https://authentication-84bac.firebaseio.com',
    storageBucket: 'authentication-84bac.appspot.com',
    messagingSenderId: '93079265725',
  });

  firebase.auth().onAuthStateChanged((user) => {
  	  if(user){
	  	  this.setState({loggedIn: true});
	  } else {
	  	  this.setState({loggedIn: false});
	  }
  });

}

renderContent(){
	switch (this.state.loggedIn){
		case true:
		return <Button 
		buttonText='Log Out'
		onPress={() => firebase.auth().signOut()}
		/>
		case false:
		return <LoginForm />;
		default:
		return <Spinner size='large'/>;
	}
	
}

	render(){
		return <View>
		<Header headerText='Authentication'/>
		{this.renderContent()}
		</View>
	}
}

export default App;