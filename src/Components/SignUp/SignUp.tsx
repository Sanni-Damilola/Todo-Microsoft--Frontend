import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Images/image.svg";
import axios from "axios";
import { allowAccess } from "../Global/GlobalContest";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = React.useContext(allowAccess);

  const [input, setInput] = React.useState(false);

  const eye = () => {
    setInput(!input);
  };

  const navigate = useNavigate();
  const registerUser = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2001/api/post", {
        name: fullName,
        email: email,
        password: password,
      })
      .then((res) => {
        context?.setUserData(res.data.data);
        navigate("/");
      });
  };

  return (
    <Container>
      <Card onSubmit={registerUser}>
        <br />
        <br />
        <Image src={img} />
        <br />
        <br />
        <span>Create account</span>
        <br />
        <br />
        <Input
          required
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          type="text"
          placeholder="name"
        />{" "}
        <br />
        <Input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="someone@example.com"
        />{" "}
        <br />
        <Password>
          <PasswordInput
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={input ? "text" : "password"}
            placeholder="password"
          />

          {input ? (
            <IconEye onClick={eye}>
              <AiFillEye />
            </IconEye>
          ) : (
            <IconeEyeCancel onClick={eye}>
              <AiFillEyeInvisible />
            </IconeEyeCancel>
          )}
        </Password>
        <br />
        <br />
        <Button type="submit">Next</Button>
      </Card>
    </Container>
  );
};

export default SignIn;

const PasswordInput = styled.input`
  outline: 0;
  border: 0;
  width: 90%;
  padding-bottom: 10px;
  ::placeholder {
    font-size: 16px;
    font-weight: 450;
  }
`;

const Password = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 410px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.6);
`;
const IconEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);
  font-size: 20px;
  cursor: pointer;
`;
const IconeEyeCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);

  font-size: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0e2dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: contain;
  height: 25px;
  margin: 0;
`;

const Card = styled.form`
  width: 460px;
  padding-left: 45px;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-bottom: 60px;

  span {
    font-size: 25px;
    color: rgb(0, 0, 0, 0.8);
    font-weight: 600;
  }
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.6);
  width: 400px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  ::placeholder {
    font-size: 16px;
    font-weight: 450;
  }
`;

const Button = styled.button`
  background-color: #0067b8;
  padding: 10px 40px;
  font-size: 14px;
  color: white;
  border: 0;
  float: right;
  margin-right: 56px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    background-color: #0067b8;
  }
`;
