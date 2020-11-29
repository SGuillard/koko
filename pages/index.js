import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Auth } from "aws-amplify";

const Home = () => {
  return (
    <>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
    </>
  );
};

export default Home;
