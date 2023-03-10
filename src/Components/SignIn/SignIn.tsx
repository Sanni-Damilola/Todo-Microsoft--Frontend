import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Images/image.svg";

const SignIn = () => {
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();
  const signInUser = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2001/api/login", {
        email,
      })
      .then((res) => {
        let captureData = window.localStorage.setItem(
          "microSoftData",
          JSON.stringify(res.data.data)
        );
        navigate("/task");
      })
      .catch((err: any) => {
        alert("User not found");
      });
  };

  return (
    <Container>
      <Card onSubmit={signInUser}>
        <br />
        <br />
        <Image src={img} />
        <br />
        <br />
        <span>Sign in</span>
        <br />
        <br />
        <Input
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="someone@example.com"
        />{" "}
        <br />
        <br />
        <br />
        <CreatAccoount>
          No account? <p>Create one!</p>
        </CreatAccoount>
        <CantAccess>Cant't access your account?</CantAccess>
        <br />
        <Wrapper>
          <Button hover="" c="black" bg="rgb(178,178,178)">
            Back
          </Button>
          <Button hover="" c="white" bg="#0067b8">
            Next
          </Button>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default SignIn;

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

const Button = styled.button<{ bg: string; c: string; hover: string }>`
  padding: 10px 40px;
  font-size: 14px;
  color: ${(props) => props.c};
  border: 0;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) => props.bg};

  :hover {
    background-color: ${(props) => props.hover};
  }
`;

const Wrapper = styled.div`
  display: flex;
  float: right;
  margin-right: 45px;
`;

const CreatAccoount = styled.p`
  display: flex;
  margin: 0;
  align-items: center;
  color: rgb(102, 102, 102);
  P {
    color: rgb(0, 103, 184);
    padding-left: 3px;
    cursor: pointer;
    width: 90px;
    transition: all 350ms;
    :hover {
      text-decoration: underline;
    }
  }
`;

const CantAccess = styled.p`
  margin: 0;
  color: rgb(0, 103, 184);
  cursor: pointer;
  width: 200px;
  transition: all 350ms;
  :hover {
    text-decoration: underline;
  }
`;
