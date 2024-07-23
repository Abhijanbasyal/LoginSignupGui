//  import styled from 'styled-components';

//  export const Container = styled.div`
//  background-color: #fff;
//  border-radius: 10px;
//  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//  position: relative;
//  overflow: hidden;
//  width: 678px;
//  max-width: 100%;
//  min-height: 400px;
//  `;

//  export const SignUpContainer = styled.div`
//   position: absolute;
//   top: 0;
//   height: 100%;
//   transition: all 0.6s ease-in-out;
//   left: 0;
//   width: 50%;
//   opacity: 0;
//   z-index: 1;
//   ${props => props.signinIn !== true ? `
//     transform: translateX(100%);
//     opacity: 1;
//     z-index: 5;
//   ` 
//   : null}
//  `;
 

//  export const SignInContainer = styled.div`
//  position: absolute;
//  top: 0;
//  height: 100%;
//  transition: all 0.6s ease-in-out;
//  left: 0;
//  width: 50%;
//  z-index: 2;
//  ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
//  `;
 
//  export const Form = styled.form`
//  background-color: #ffffff;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  flex-direction: column;
//  padding: 0 50px;
//  height: 100%;
//  text-align: center;
//  `;
 
//  export const Title = styled.h1`
//  font-weight: bold;
//  margin: 0;
//  `;
 
//  export const Input = styled.input`
//  background-color: #eee;
//  border: none;
//  padding: 12px 15px;
//  margin: 8px 0;
//  width: 100%;
//  `;
 

//  export const Button = styled.button`
//     border-radius: 20px;
//     border: 1px solid #ff4b2b;
//     background-color: #ff4b2b;
//     color: #ffffff;
//     font-size: 12px;
//     font-weight: bold;
//     padding: 12px 45px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     transition: transform 80ms ease-in;
//     &:active{
//         transform: scale(0.95);
//     }
//     &:focus {
//         outline: none;
//     }
//  `;
//  export const GhostButton = styled(Button)`
//  background-color: transparent;
//  border-color: #ffffff;
//  `;
 
//  export const Anchor = styled.a`
//  color: #333;
//  font-size: 14px;
//  text-decoration: none;
//  margin: 15px 0;
//  `;
//  export const OverlayContainer = styled.div`
// position: absolute;
// top: 0;
// left: 50%;
// width: 50%;
// height: 100%;
// overflow: hidden;
// transition: transform 0.6s ease-in-out;
// z-index: 100;
// ${props =>
//   props.signinIn !== true ? `transform: translateX(-100%);` : null}
// `;

// export const Overlay = styled.div`
// background: #ff416c;
// background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
// background: linear-gradient(to right, #ff4b2b, #ff416c);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: 0 0;
// color: #ffffff;
// position: relative;
// left: -100%;
// height: 100%;
// width: 200%;
// transform: translateX(0);
// transition: transform 0.6s ease-in-out;
// ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
// `;
 
//  export const OverlayPanel = styled.div`
//      position: absolute;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      flex-direction: column;
//      padding: 0 40px;
//      text-align: center;
//      top: 0;
//      height: 100%;
//      width: 50%;
//      transform: translateX(0);
//      transition: transform 0.6s ease-in-out;
//  `;

//  export const LeftOverlayPanel = styled(OverlayPanel)`
//    transform: translateX(-20%);
//    ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
//  `;

//  export const RightOverlayPanel = styled(OverlayPanel)`
//      right: 0;
//      transform: translateX(0);
//      ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
//  `;

//  export const Paragraph = styled.p`
//  font-size: 14px;
//    font-weight: 100;
//    line-height: 20px;
//    letter-spacing: 0.5px;
//    margin: 20px 0 30px
//  `;



import styled from 'styled-components';

// Adjusted container size for a larger GUI
export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 900px;  /* Increased width */
  max-width: 100%;
  min-height: 570px; /* Increased height */
`;

// Sign-up container style
export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` : null}
`;

// Sign-in container style
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

// Form styling
export const Form = styled.form`
  background-color: #f9f9f9; /* Light gray for form background */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 60px; /* Increased padding for more space */
  height: 100%;
  text-align: center;
`;

// Title styling
export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  color: #1f2937; /* Dark gray color for the title */
`;

// Input styling
export const Input = styled.input`
  background-color: #e5e7eb; /* Slightly darker gray for input background */
  border: 1px solid #d1d5db; /* Border color for inputs */
  padding: 14px 20px; /* Increased padding */
  margin: 10px 0; /* Increased margin */
  width: 100%;
  border-radius: 8px; /* Rounded corners for inputs */
`;

// Button styling
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #374151;
  background-color: #374151;
  color: #ffffff;
  font-size: 14px; /* Slightly larger font size */
  font-weight: bold;
  padding: 14px 50px; /* Increased padding for a larger button */
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease-in; /* Smooth transition for hover effect */
  
  &:hover {
    background-color: #1f2937; /* Darker shade on hover */
    border-color: #1f2937;
  }
  
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

// Ghost button styling
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #374151;
  color: #374151;
  
  &:hover {
    background-color: #f3f4f6; /* Light gray background on hover */
    color: #374151;
  }
`;

// Anchor styling
export const Anchor = styled.a`
  color: #374151;
  font-size: 14px;
  text-decoration: none;
  margin: 20px 0; /* Increased margin */
`;

// Overlay container styling
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

// Overlay styling
export const Overlay = styled.div`
  background: #374151; /* Dark gray gradient background */
  background: -webkit-linear-gradient(to right, #1f2937, #374151);
  background: linear-gradient(to right, #1f2937, #374151);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => props.signinIn !== true ? `transform: translateX(50%);` : null}
`;

// Overlay panel styling
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// Left overlay panel styling
export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

// Right overlay panel styling
export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

// Paragraph styling
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #6b7280; /* Medium gray for paragraph text */
`;
