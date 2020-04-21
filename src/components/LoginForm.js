import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common/Index';

class LoginForm extends Component{
state = { email: '', password: '', error: '', loading: false };

onButtonPress(){

this.setState({error: '', loading: true});
	firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
	.then(this.onLoginSuccess.bind(this))
	.catch(() => {
	  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
	  .catch(this.onLoginFail.bind(this));
	});

}

onLoginSuccess(){
	this.setState({
		email: '',
		password: '',
		error: '',
		loading: false
	});
}

onLoginFail(){
	this.setState({
		error: 'Authentication Failed',
		loading: false
	});
}

renderButton(){
	 if(this.state.loading){
	 	 return <Spinner size='small' />
	 }

	 return (
	 	<Button 
		buttonText='Log in'
		onPress={this.onButtonPress.bind(this)}
		/>
	 );
}

	render(){
		return <Card>
		<CardSection>
		<Input
		placeholder='user@gmail.com'
		label='Email'
		value={this.state.email}
		onChangeText={text => this.setState({email: text})}
		/>
		</CardSection>

		<CardSection>
		<Input
		secureTextEntry
		placeholder='password'
		label='Password'
		value={this.state.password}
		onChangeText={text => this.setState({password: text})}
		/>
		</CardSection>

		<Text style={styles.errorTextStyle}>{this.state.error}</Text>

		<CardSection>
		{this.renderButton()}
		</CardSection>
		</Card>
		
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;