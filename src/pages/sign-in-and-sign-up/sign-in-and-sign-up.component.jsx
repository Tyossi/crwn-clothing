import React from 'react';
import SignIn from '../../components/signin/signin.component';
import './sign-in-and-sign-up.styles.scss';
import SignUp from "../../components/signup/sign-up.component";



const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
};

export default SignInAndSignUpPage;