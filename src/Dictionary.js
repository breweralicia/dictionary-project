import React, { useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeywor] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0])
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse);
    
  }

  function handleKeywordChange(event) {
    //console.log(event.target.value)
    setKeywor(event.target.value);
  }


  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results}/>
    </div>
  )
  
}