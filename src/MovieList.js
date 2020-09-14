import React, { useEffect } from "react";

function Movie({ movie, onRemove, onToggle }) {
  const { id, title, director, year, active } = movie;
  const style = {
    color: active ? "blue" : "black",
    cursor: "pointer",
  };

  useEffect(() => {
    console.log("movie 컴포넌트 마운트됨", movie);
    return () => {
      console.log("movie 컴포넌트 언마운트됨", movie);
    };
  }, [movie]);
  return (
    <div>
      <b style={style} onClick={() => onToggle(id)}>
        {title}
      </b>{" "}
      ({director},{year})<button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function MovieList({ movieList, onRemove, onToggle }) {
  return (
    <>
      {movieList.map((item) => (
        <Movie
          key={item.id}
          movie={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default MovieList;
