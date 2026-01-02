import "../styles/Login.css";


function Login() {
  return (
    <div className="page">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/logo.png" alt="ClosetConnect Logo" />
     
      </div>


      {/* Login Card */}
      <div className="login-card">
        <h2>Welcome Back!</h2>


        <form>
          <label>University Email</label>
          <input type="email" placeholder="example@college.ac.in" />


          <label>Password</label>
          <input type="password" placeholder="Enter password" />


          <button type="submit">Login</button>
        </form>


        <p className="register">
          Don’t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}


export default Login;
