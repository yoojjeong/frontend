import { useState } from "react";

const Login = () => {
  const [memberId, setMemberId] = useState("");
  const [memberPasswd, setMemberPasswd] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      memberId: memberId,
      memberPasswd: memberPasswd,
    };

    const response = await fetch("http://localhost:8090/app/member/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include", // 세션 인증을 유지
    });

    if (response.ok) {
      alert("로그인 성공!");
      window.location.href = "/"; // 로그인 성공 후 홈으로 이동 aaaaaaa
    } else {
      alert("로그인 실패! 아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={memberPasswd}
          onChange={(e) => setMemberPasswd(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
