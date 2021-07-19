import React, { useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeywor] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0])
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001e4fa46e233be46e68562e79c899b6b95`  
    let pexelsApiUrl = `https://api.pexels.com/v1//search?query=${keyword}&per_page=1`  
    axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    //console.log(event.target.value)
    setKeywor(event.target.value);
  }


  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <div className="Hint">
        Suggested Words: Sunset, Yoga, Hello, Forest...
      </div>
      </section>
      <Results results={results}/>
      <Photos photos={photos}/>
    </div>
  )
  
}