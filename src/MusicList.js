import React, { useEffect, useMemo } from "react";
// eslint-disable-next-line
import Music2 from "./Music2";

// eslint-disable-next-line
function Music({ music, onRemove, onToggle }) {
  const { id, title, singer, active } = music;
  const style = {
    color: active ? "blue" : "black",
    cursor: "pointer",
  };

  // useEffect(() => {
  //   console.log("그냥 컴포넌트 변화시 찍힘");
  // });

  useEffect(() => {
    console.log("마운트 시에 실행");
    console.log(music);
    return () => {
      console.log("언마운트 시에 실행");
      console.log(music);
    };
  }, [music /* music이 변화할 때마다 실행 */]);

  return (
    <div>
      <b style={style} onClick={() => onToggle(id)}>
        {title}
      </b>{" "}
      ({singer})<button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function MusicList({ musicList, onRemove, onToggle }) {
  const countActiveMusic = () => {
    console.log("Active Music 개수 세기");
    return musicList.filter((music) => music.active).length;
  };
  const count = useMemo(countActiveMusic, [musicList]);
  return (
    <>
      {musicList.map((item) => (
        <Music
          key={item.id}
          music={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      <hr />
      <div>Active된 Music 수 : {count}</div>
    </>
  );
}

export default MusicList;
