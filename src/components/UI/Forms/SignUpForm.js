import { useRef } from 'react';

const SignUpForm = ( onClick ) => {

  const email = useRef('');
  const password = useRef('');

  const signUpSubmitHandler = (e) => {
    e.preventDefault();

    let formEmail = email.current.value;
    let formPassword = password.current.value

    onClick.signUpFormHandler(e, formEmail, formPassword);
  }

  return (
    <form className="signUp">
      <h3>Sign up for an account</h3>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" ref={email} placeholder="Enter your email to sign up" required/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" ref={password} placeholder="Enter a new password"/>
      <br/><br/>
      <button onClick={signUpSubmitHandler}>Sign Up</button>
    </form>
  )
}

export default SignUpForm;