import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  ButtonContainer,
  FormButton,
  Text,
  ChangeButton,
  LinkSign,
} from "./SignElements";

function SignIn(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <Container>
      <FormWrap>
        <Icon to="/">AlkOS</Icon>
        <FormContent>
          <Form action="#">
            <FormLabel>Username</FormLabel>
            <FormInput
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <ButtonContainer>
              {hasAccount ? (
                <>
                  <FormButton onClick={handleLogIn} to="/pubs">
                    <LinkSign to="/pubs"> Sign in</LinkSign>{" "}
                  </FormButton>
                  <Text>
                    Don't have an account?{" "}
                    <ChangeButton onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </ChangeButton>
                  </Text>
                </>
              ) : (
                <>
                  <FormButton onClick={handleSignup}>Sign up</FormButton>
                  <Text>
                    Have an account?{" "}
                    <ChangeButton onClick={() => setHasAccount(!hasAccount)}>
                      Sign in
                    </ChangeButton>
                  </Text>
                </>
              )}
            </ButtonContainer>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
