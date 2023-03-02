import LoginLayout from "../components/LoginLayout";

const Login = () => {
  return (
    <>
      <LoginLayout>
        <h2 style={{ fontSize: 40, fontWeight: 600 }}>Login</h2>
        <div>
          <span>아이디 : </span> <input type="text" />
        </div>
        <div>
          <span>비밀번호 : </span> <input type="password" />
        </div>
        <button type="button">로그인하기</button>
      </LoginLayout>
    </>
  );
};

export default Login;
