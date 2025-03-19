import { useState } from "react";

const Logout = () => {
  const handleLogout = async () => {
    const response = await fetch("http://localhost:8090/app/member/logout", {
      method: "POST",
      credentials: "include", // 세션 인증을 유지
    });

    if (response.ok) {
      alert("로그아웃 성공!");
      window.location.href = "/login"; // 로그아웃 후 로그인 페이지로 이동
    } else {
      alert("로그아웃 실패!");
    }
  };

  return (
    <div>
      <h2>로그아웃</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Logout;
