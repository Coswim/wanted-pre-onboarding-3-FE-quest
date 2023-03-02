import styled from "styled-components";
const Header = () => {
  return (
    <>
      <HeaderWrap>Wanted preonboarding course</HeaderWrap>
    </>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 30px 50px;
  border-bottom: 1px solid grey;

  font-size: 2rem;
  font-weight: 600;
`;
export default Header;
