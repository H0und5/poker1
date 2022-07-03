
const SignOutButton = (props) => {

  const logOutUserHandler = (e) => {
    e.preventDefault();

    props.signOutHandler();
  }

  return (
    <button onClick={logOutUserHandler}>Sign Out</button>
  )
}

export default SignOutButton;