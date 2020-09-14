// 클래스형 컴포넌트
import React, { Component } from "react";

// render()
class Music2 extends Component {
  render() {
    const { music, onRemove, onToggle } = this.props;
    const { id, title, singer, active } = music;
    const style = {
      color: active ? "blue" : "black",
      cursor: "pointer",
    };
    return (
      <div>
        <b style={style} onClick={() => onToggle(id)}>
          {title}
        </b>{" "}
        ({singer})<button onClick={() => onRemove(id)}>삭제</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("컴포넌트가 화면에 나타남");
  }

  componentDidUpdate() {
    console.log("컴포넌트가 업데이트 됨");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 화면에서 사라짐");
  }
}

export default Music2;
