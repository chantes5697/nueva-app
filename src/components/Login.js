import React from 'react';
import { connect } from 'react-redux';
import { firebaseLogin } from '../actions/auth';

const Login = ({ login }) => (
    

        //LOGIN WITH GOOGLE ACCOUNT
        <div classname="container">
        <button onclick="{login}">Login with Google Account</button>
    </div>

);

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(firebaseLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);