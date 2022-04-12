import React from "react";

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { signInWithEmailAndPassword } from 'firebase/auth'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>SignIn with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput name="password"
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />


                    <ButtonsBarContainer>

                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}


export default SignIn;