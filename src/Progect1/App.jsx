import React, {useState, useEffect} from "react";
import './Style.css'


     function App() {
      const [file, setFile] = useState(null);
      const [result, setResult] = useState(null);
      const [loading, setLoading] = useState(false);
    
      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handleSearch = async () => {
        if (!file) return;
    
        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);
    
        try {
          const response = await fetch("https://api.trace.moe/search", {
            method: "POST",
            body: formData,
          });
    
          const data = await response.json();
          const bestMatch = data.result[0];
    
          setResult({
            anime: bestMatch.filename,
            episode: bestMatch.episode,
            similarity: (bestMatch.similarity * 100).toFixed(2),
            time: new Date(bestMatch.from * 1000).toISOString().substr(11, 8),
            video: bestMatch.video,
            image: bestMatch.image,
          });
          console.log(data)
        } catch (err) {
          console.error("Ошибка:", err);
          alert("Не удалось найти аниме.");
        }
    
        setLoading(false);
      };
 




    return(
        <div className="div3">
                    <div className="div2">
            <div className="div1">
                    <div style={{ padding: 20 }}>
      <h2 className="h" >Найди аниме по фото</h2>
      <input className="input1" type="file" onChange={handleFileChange} /><br /><br />
      <button className="button1" onClick={handleSearch} disabled={loading}>
        {loading ? "Ищем..." : "Найти"}
      </button >

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3 className="hhh">Результат:</h3>
          <p className="p1"><strong>Аниме:</strong> {result.anime}</p>
          <p className="p1"><strong>Серия:</strong> {result.episode}</p>
          <p className="p1"><strong>Время:</strong> {result.time}</p>
          <p className="p1"><strong>Совпадение:</strong> {result.similarity}%</p>
          <img src={result.image} alt="Scene preview" width={300} />
          <br/>
          <a className="ahre" href={result.video} target="_blank" rel="noopener noreferrer">Смотреть сцену</a>
        </div>
      )}
    </div>
            </div>
        </div>
        </div>


        
    );
    
}


export default App;




