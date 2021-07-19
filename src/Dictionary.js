import React, { useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeywor] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    </div>
  )
  
}