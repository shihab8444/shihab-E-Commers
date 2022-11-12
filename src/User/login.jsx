import './user.css'

const login = () => {
  return (
    <>
      <div className='login'>
        <div className='background'>
          <div className='shape'></div>
          <div className='shape'></div>
        </div>
        <form>
          <h3>Login Here</h3>
          <label for='username'>Username</label>
          <input type='text' placeholder='Email or Phone' id='username'></input>
          <label for='password'>Password</label>
          <input type='password' placeholder='Password' id='password'></input>
          <button>Log In</button>
          <div className='social'></div>
          <div className='go'>
            <i class='fab fa-google'></i> Google
          </div>
          <div className='fb'>
            <i class='fab fa-facebook'></i> Facebook
          </div>
        </form>
      </div>
    </>
  )
}
export default login
