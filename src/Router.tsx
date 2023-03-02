import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Login from "./routes/Login";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";
import SignUp from "./routes/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <PageLayoutStyle>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PageLayoutStyle>
    </BrowserRouter>
  );
};

const PageLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Router;
