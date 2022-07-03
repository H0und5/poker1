import { useRef } from 'react';


const SignInForm = (onClick) => {

  const email = useRef('');
  const password = useRef('');

  const signInFormHandler = (e) => {
    e.preventDefault();

    onClick.signInFormHandler(e, email.current.value, password.current.value)

    email.current.value = '';
    password.current.value = '';
  }

  return (
    <form>
      <h3>Log in</h3>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" ref={email} placeholder="Enter your email to sign up" required/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" ref={password} placeholder="Enter a new password"/>
      <br/><br/>
      <button onClick={signInFormHandler}>Sign Up</button>
    </form>
  )
}

export default SignInForm;