
const SignOutButton = (onClick) => {

  const logOutUserHandler = (e) => {
    e.preventDefault();

    onClick.logOutHandler();
  }

  return (
    <button onClick={logOutUserHandler}>Sign Out</button>
  )
}

export default SignOutButton;