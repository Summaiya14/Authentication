import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common/Index';

class LoginForm extends Component{
	render(){
		return <Card>
		<CardSection>
		<TextInput style={{ height: 20, width: 100 }}/>
		</CardSection>

		<CardSection>
		</CardSection>

		<CardSection>
		<Button buttonText='Log in' />
		</CardSection>
		</Card>
		
	}
}

export default LoginForm;