import { useState } from "react";

import { getApi } from "../api/middleware/get";
import Button from "../common/Button";
import "../styles/joke.scss";

interface IJoke {
  joke: string;
  error?: boolean;
}

const Joke = () => {
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

  const getJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getApi(apiUrl);
      setJoke(res);
    } catch (error) {
      setError("Failed to fetch the joke!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="joke">
      <h3>Line generator component</h3>
      <Button onClick={getJoke} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div> {error}</div>
      ) : (
        <div>{joke?.joke}</div>
      )}
    </div>
  );
};

export default Joke;
