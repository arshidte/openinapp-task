import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in-page h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-2">
        <div className="hidden md:block left-side bg-primary h-screen">
          <img src="images/Logo.svg" alt="" />
          <h1 className="main-head text-white text-center">BASE</h1>
          <div className="bottom-icons">
            <div className="flex items-center gap-6">
              <img src="images/git.svg" alt="git" />
              <img src="images/x.svg" alt="x" />
              <img src="images/linkedin.svg" alt="in" />
              <img src="images/discord.svg" alt="discord" />
            </div>
          </div>
        </div>

        <div className="md:hidden signin-header bg-primary">
          <img src="images/Logo-white.png" alt="logo-company" />
        </div>

        <div className="flex flex-col justify-center items-center p-2">
          <div className="sign-in-form flex flex-col gap-7">
            <div>
              <h3>Sign In</h3>
              <p>Sign in to your account</p>
            </div>
            <div className="ga-btns grid grid-cols-2 gap-2">
              <button className="text-secondary flex items-center gap-2">
                <img src="images/google.png" alt="google" />
                Sign in with Google
              </button>
              <button className="text-secondary flex items-center gap-2">
                <img src="images/apple.png" alt="apple" />
                Sign in with Apple
              </button>
            </div>

            <div className="form-div">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email address</label>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Password" />
                </div>
                <a href="#" className="text-link-primary">
                  <p>Forgot password?</p>
                </a>
                <Link
                  to="/dashboard"
                  className="signin-btn bg-primary text-center"
                >
                  <button>Sign In</button>
                </Link>
              </form>
            </div>
            <p className="text-center text-secondary">
              Don't have an account?{" "}
              <a href="#" className="text-link-primary">
                Register here
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignIn;
