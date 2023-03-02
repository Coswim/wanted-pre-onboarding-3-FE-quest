import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
interface props {
  children: ReactNode;
}
const LoginLayout = ({ children }: props) => {
  return (
    <>
      <LoginWrap>{children}</LoginWrap>
    </>
  );
};
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 450px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 40px;
  gap: 20px;
`;
export default LoginLayout;
