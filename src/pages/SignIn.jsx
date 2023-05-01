import addAPhoto from "../assets/addAPhoto.png";

const SignIn = () => {
  return (
    <section className="signIn">
      <form>
        <h1>Get Started</h1>
        <h5>add a photo</h5>
        <div className="img">
          <img src={addAPhoto} alt="" />
          <input type="file" accept="image/*" hidden />
        </div>
        <label htmlFor="input">
          fill in your name
          <input type="text" placeholder="your name" />
        </label>
        <button>Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;
