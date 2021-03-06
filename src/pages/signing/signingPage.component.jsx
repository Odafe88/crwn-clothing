import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { SigningContainer } from './signingPage.styles';
import SignUp from '../../components/sign-up/sign-up.component';

import SignIn from '../../components/sign-in/sign-in.component';

import { auth } from '../../firebase/firebase.utils';

const SigningPage = ({ currentUser }) => (
    <div>
        {
            currentUser ? <Navigate to="/" /> :
                <SigningContainer>
                    <SignIn />
                    <SignUp />
                </SigningContainer>
        }
    </div>
)
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(SigningPage);