import LoginLayout from "../components/LoginLayout";
const SignUp = () => {
  return (
    <>
      <LoginLayout>
        <h2 style={{ fontSize: 40, fontWeight: 600 }}>Sign Up</h2>
        <div>
          <span>아이디 : </span> <input type="text" />
        </div>
        <div>
          <span>닉네임 : </span> <input type="text" />
        </div>
        <div>
          <span>비밀번호 : </span> <input type="password" />
        </div>
        <div>
          <span>비밀번호 확인 : </span> <input type="password" />
        </div>
        <button type="button">가입하기</button>
      </LoginLayout>
    </>
  );
};

export default SignUp;
