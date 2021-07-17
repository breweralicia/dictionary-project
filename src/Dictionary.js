import React, { useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeywor] = useState("");

  function search(event){
    event.preventDefault();
    alert(`searching for ${keyword} definition`)
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