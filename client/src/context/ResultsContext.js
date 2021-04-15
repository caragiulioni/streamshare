import React, { useState } from "react";
export const ResultsContext = React.createContext(null);

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState(null);
  const [title, setTitle] = useState(null);
  const [response, setResponse] = useState(null);
  return (
    <ResultsContext.Provider
      value={{ results, setResults, response, setResponse, title, setTitle }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
