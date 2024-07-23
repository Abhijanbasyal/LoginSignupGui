import React from "react";
import axios from "axios";
import * as LoginCSS from '../components/CSSforlogin';

const LoginSignup = () => {
    const [signIn, toggle] = React.useState(true);
    const [signUpForm, setSignUpForm] = React.useState({ name: "", email: "", password: "" });
    const [signInForm, setSignInForm] = React.useState({ email: "", password: "" });

    const handleSignUpChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    };

    const handleSignInChange = (e) => {
        setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
    };

    const handleSignUpSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const response = await axios.post('/api/signup', signUpForm);
        //     console.log('Sign Up Successful:', response.data);
        // } catch (error) {
        //     console.error('Sign Up Error:', error);
        // }

        console.log("Signup Successfully")
    };

    const handleSignInSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const response = await axios.post('/api/signin', signInForm);
        //     console.log('Sign In Successful:', response.data);
        // } catch (error) {
        //     console.error('Sign In Error:', error);
        // }
        console.log("Signin Successfuylly")
    };

    return (
        <LoginCSS.Container>
            <LoginCSS.SignUpContainer signinIn={signIn}>
                <LoginCSS.Form onSubmit={handleSignUpSubmit}>
                    <LoginCSS.Title>Create Account</LoginCSS.Title>
                    <LoginCSS.Input type='text' name='name' placeholder='Name' value={signUpForm.name} onChange={handleSignUpChange} />
                    <LoginCSS.Input type='email' name='email' placeholder='Email' value={signUpForm.email} onChange={handleSignUpChange} />
                    <LoginCSS.Input type='password' name='password' placeholder='Password' value={signUpForm.password} onChange={handleSignUpChange} />
                    <LoginCSS.Button type='submit'>Sign Up</LoginCSS.Button>
                </LoginCSS.Form>
            </LoginCSS.SignUpContainer>

            <LoginCSS.SignInContainer signinIn={signIn}>
                <LoginCSS.Form onSubmit={handleSignInSubmit}>
                    <LoginCSS.Title>Sign in</LoginCSS.Title>
                    <LoginCSS.Input type='email' name='email' placeholder='Email' value={signInForm.email} onChange={handleSignInChange} />
                    <LoginCSS.Input type='password' name='password' placeholder='Password' value={signInForm.password} onChange={handleSignInChange} />
                    <LoginCSS.Anchor href='#'>Forgot your password?</LoginCSS.Anchor>
                    <LoginCSS.Button type='submit'>Sign In</LoginCSS.Button>
                </LoginCSS.Form>
            </LoginCSS.SignInContainer>

            <LoginCSS.OverlayContainer signinIn={signIn}>
                <LoginCSS.Overlay signinIn={signIn}>
                    <LoginCSS.LeftOverlayPanel signinIn={signIn}>
                        <LoginCSS.Title>Welcome Back!</LoginCSS.Title>
                        <LoginCSS.Paragraph>
                            To keep connected with us please login with your personal info
                        </LoginCSS.Paragraph>
                        <LoginCSS.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </LoginCSS.GhostButton>
                    </LoginCSS.LeftOverlayPanel>

                    <LoginCSS.RightOverlayPanel signinIn={signIn}>
                        <LoginCSS.Title>Hello, Friend!</LoginCSS.Title>
                        <LoginCSS.Paragraph>
                            Enter Your personal details and start journey with us
                        </LoginCSS.Paragraph>
                        <LoginCSS.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </LoginCSS.GhostButton>
                    </LoginCSS.RightOverlayPanel>
                </LoginCSS.Overlay>
            </LoginCSS.OverlayContainer>
        </LoginCSS.Container>
    );
};

export default LoginSignup;

