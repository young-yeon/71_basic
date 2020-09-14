import React from "react";
import PropTypes from "prop-types";

function Hello({ name = "NONE", color = "black", children = "뷁뷁뷁뷁" }) {
  return (
    <>
      <div style={{ color }}>Hello, {name}</div>
      <div>{children}</div>
    </>
  );
}

/*
// 우선 반영
Hello.defaultProps = {
  name: "NONE",
  color: "black",
  children: "뷁뷁뷁뷁",
};
*/

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Hello;
