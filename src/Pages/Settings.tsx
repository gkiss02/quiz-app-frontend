import styles from "./Settings.module.css";
import BlueButton from "../UI/BlueButton";
import ButtonContainer from "../UI/ButtonContainer";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getAuthToken } from "../util/auth";

function Settings() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  
  const backIcon = require("../Images/back.png");

  function updateEmail() {
    fetch('http://localhost:8080/users/updateEmail', {
      method: 'PATCH',
      headers: {
        Authorization: "Bearer " + getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: emailRef.current?.value
      })
    })
  }

  function updatePassword() {
    fetch('http://localhost:8080/users/updatePassword', {
      method: 'PATCH',
      headers: {
        Authorization: "Bearer " + getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: passwordRef.current?.value,
        passwordConfirm: passwordConfirmRef.current?.value
      })
    })
  }

  function toHome() {
    navigate("/main");
  }

  useEffect(() => {
    async function fetchMyData() {
      const response = await fetch("http://localhost:8080/users/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getAuthToken(),
        },
      });
      const data = await response.json();
      setEmail(data.email);
    }
    fetchMyData();
  }, []);

  return (
    <div className={styles.container}>
      <img src={backIcon} className={styles.icon} onClick={toHome}></img>
      <div className={styles["element-container"]}>
        <h2>Email</h2>
        <div className={styles["input-container"]}>
          <input type="email" placeholder={email} className={styles.input} ref={emailRef}></input>
          <ButtonContainer>
            <BlueButton onClick={updateEmail}>Save</BlueButton>
          </ButtonContainer>
        </div>
      </div>
      <div className={styles["element-container"]}>
        <h2>Password</h2>
        <div className={styles["input-container"]}>
          <label>New password</label>
          <input type="password" placeholder="••••••••" className={styles.input} ref={passwordRef}></input>
          <label>Confirm password</label>
          <input type="password" placeholder="••••••••" className={styles.input} ref={passwordConfirmRef}></input>
          <ButtonContainer>
            <BlueButton onClick={updatePassword}>Save</BlueButton>
          </ButtonContainer>
        </div>
      </div>
      <div className={styles["element-container"]}>
        <div className={styles["single-item"]}>
          <h2>Dark mode</h2>
          <Switch></Switch>
        </div>
      </div>
    </div>
  );
}

export default Settings;
