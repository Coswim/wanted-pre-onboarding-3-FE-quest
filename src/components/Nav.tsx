import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavWrap>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          page1
        </button>
        <button
          onClick={() => {
            navigate("/page2");
          }}
        >
          page2
        </button>
        <button
          onClick={() => {
            navigate("/page3");
          }}
        >
          page3
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하기
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하기
        </button>
      </NavWrap>
    </>
  );
};

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100px;
  padding: 50px 30px;
  gap: 20px;
  border-right: 1px solid grey;

  & > button {
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    white-space: nowrap;
  }

  & > button:hover {
    color: #4e46f2;
  }
`;

export default Nav;
