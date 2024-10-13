import { useState } from "react";

import { getApi } from "../api/middleware/get";
import Button from "../common/Button";
import "../styles/joke.scss";

const Joke = () => {
  const [joke, setJoke] = useState<any>({});
  const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

  function getJoke() {
    getApi(apiUrl)
      .then((res) => {
        setJoke(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="joke">
      <h3>Line generator component</h3>
      <Button callApi={getJoke} />
      <div>{joke?.joke}</div>
    </div>
  );
};

export default Joke;
