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
  const countActiveMovie = () => {
    console.log("Active Music 개수 세기");
    return movieList.filter((movie) => movie.active).length;
  };
  const count = useMemo(countActiveMovie, [movieList]);
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
      <hr />
      <div>Active된 Movie 수 : {count}</div>
    </>
  );
}

export default MovieList;
