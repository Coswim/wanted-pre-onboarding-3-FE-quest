import React, { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";
interface props {
  children: ReactNode;
}
const Layout = ({ children }: props) => {
  return (
    <>
      <LayoutWrap>
        <Header />
        <ContentsFlex>{children}</ContentsFlex>
      </LayoutWrap>
    </>
  );
};

const LayoutWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContentsFlex = styled.div`
  display: flex;
  height: 100%;
`;
export default Layout;
