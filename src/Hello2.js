import React from "react";
import PropTypes from "prop-types";

function Hello2({
  id = 0,
  name = "이름없음",
  children = "별명없음",
  color = "black",
  isLoggedIn = false,
  messages = [],
}) {
  return (
    <>
      <div style={{ color }}>
        학번:{id}
        <br />
        이름:{name}
        <br />
        별명:{children}
        <br />
        {isLoggedIn ? "로그인 되었습니다" : "로그인 되어 있지 않습니다."}
        <br />
        {messages.length > 0 && messages.length + "건의 메시지가 있습니다"}
      </div>
    </>
  );
}

Hello2.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Hello2;
