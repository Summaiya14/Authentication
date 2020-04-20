import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common/Index';

class LoginForm extends Component{
state = { email: '', password: '' };
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

		<CardSection>
		<Button buttonText='Log in' />
		</CardSection>
		</Card>
		
	}
}

export default LoginForm;