import React, { useEffect, useState } from "react";
import './Main.css';

const myURL = "http://localhost:3000/articles/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};

function Main() {

  const [articles,setArticles] = useState([]);
  const [renderOnceOnly, setRenderOnceOnly] = useState(0);

  useEffect(() => {
    fetch(myURL, { method: myMethod, headers: myHeader })
    .then(response => response.json())
    .then(data => {
      setArticles(data);
      // console.log(data);
    }).catch(console.error);
  },[renderOnceOnly]);

  return (
    <main className="App-header">
      <p>This is the main part of the web page</p>
      <p>*** DEBUT ***</p>
      <ul>
        {articles.map(article => <li key={article.id}>{article.title} | {article.content} </li>)}
      </ul>
      <p>*** FIN ***</p>
    </main>
  );
}

export default Main;