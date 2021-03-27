import React from 'react';
import CustomButton from '../custom-button.component.jsx/custom-buttom.component';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>
                    I already have an account
                </h2>
                <span>
                    Sign in with your email and password
                </span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput handleInputChange={this.handleInputChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        required />
                    <FormInput handleInputChange={this.handleInputChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Google Sign In {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn