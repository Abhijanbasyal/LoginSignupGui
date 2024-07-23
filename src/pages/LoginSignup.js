import React from "react";
import * as LoginCSS from '../LoginCSS/CSSforlogin';


const LoginSignup = () => {
    const [signIn, toggle] = React.useState(true);
    return(
        <LoginCSS.Container>
            <LoginCSS.SignUpContainer signinIn={signIn}>
                <LoginCSS.Form>
                    <LoginCSS.Title>Create Account</LoginCSS.Title>
                    <LoginCSS.Input type='text' placeholder='Name' />
                    <LoginCSS.Input type='email' placeholder='Email' />
                    <LoginCSS.Input type='password' placeholder='Password' />
                    <LoginCSS.Button>Sign Up</LoginCSS.Button>
                </LoginCSS.Form>
            </LoginCSS.SignUpContainer>

            <LoginCSS.SignInContainer signinIn={signIn}>
                 <LoginCSS.Form>
                     <LoginCSS.Title>Sign in</LoginCSS.Title>
                     <LoginCSS.Input type='email' placeholder='Email' />
                     <LoginCSS.Input type='password' placeholder='Password' />
                     <LoginCSS.Anchor href='#'>Forgot your password?</LoginCSS.Anchor>
                     <LoginCSS.Button>Sigin In</LoginCSS.Button>
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
                              Sigin Up
                          </LoginCSS.GhostButton> 
                    </LoginCSS.RightOverlayPanel>

                </LoginCSS.Overlay>
            </LoginCSS.OverlayContainer>

        </LoginCSS.Container>
    )
}

export default LoginSignup






