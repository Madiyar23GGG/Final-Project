import React, { useState } from "react";
import './Style.css'

const API_KEY = "AIzaSyCr3HTFw6F4wSHh4YOfr8WFrVTqwmxeed0"; 
const CX = "55763fb6df5914e57"; 

 function MovieFinder() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null); 

  const handleSearch = async () => {
    const query = encodeURIComponent(imageUrl);

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${query}&searchType=image&key=${API_KEY}&cx=${CX}`
    );

    const data = await response.json();
    setResult(data.items?.[0] || null); 
    console.log(data);
  };

  return (
    <div  style={{ padding: 20 }}>
      <div className="div-3">
              <div className="div-2">
              <h2 className="h-1">Поиск по запросу</h2>
      <input className="input2"
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Напиши название фильма"
        style={{    }}
      />
      <button className="button-2" onClick={handleSearch}>Искать</button>

      {result && (
        <div style={{ marginTop: 10 }}>
          <h3>Результат:</h3>
          <a className="a" href={result.link} target="_blank" rel="noopener noreferrer">
            {result.title}
          </a>
          <br />
          <img className="img-2" src={result.link} />
        </div>
      )}
      </div>
      </div>


    </div>
  );
}

export default MovieFinder;