import * as React from "react";
import axios from "axios";

const List = ({ minDuration = 5500 }) => {
  const [dataTitle, updateDataTitle] = React.useState("");
  const [filmList, updateFilmList] = React.useState();
  const endPoint =
    "https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10";
  React.useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await axios(endPoint);
      console.log(result.data);
      const tempTitle = result.data.title || "";
      updateDataTitle(tempTitle);
      if (
        result &&
        result.data &&
        result.data.films &&
        result.data.films.length
      ) {
        const reqRes = result.data.films.filter((item) => {
          return item.duration_seconds >= minDuration;
        });
        console.log(reqRes);
        updateFilmList(reqRes);
        console.log(filmList);
      }
    }, 5500);
    return () => clearInterval(intervalId);
  }, [minDuration, filmList]);
  return (
    <div>
      <div className="film-title">{dataTitle}</div>
      {filmList &&
        filmList.map((item) => (
          <div>
            <div>
              {item.title} ({item.duration_seconds})
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
