import React, {useState, useEffect} from 'react';
import './styles.css';

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(()=>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((e)=> e.json() )
      .then( (json) => { 
        setNutri(json);
        console.log(json);
      })
    }
    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React nutri</strong>
      </header>
      
      {nutri.map((item)=>{
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa" />
              <p> {item.subtitulo}</p>
              <a className="botao">Acessar</a>
            </article>
          );
        })}
      
    </div>
  );
}

export default App;
