import React, { useEffect, useState } from "react";
import axios from "axios";

type quote = {
  id: string;
  content: string;
  faction: string;
};

const useQuote = () => {
  const [quote, setQuote] = useState("");

  const fetch = () =>
    axios
      .get<quote>(
        "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
      )
      .then((res) => setQuote(res.data.content));

  useEffect(() => {
    fetch();
  }, []);

  return { quote, fetch };
};

export default useQuote;
