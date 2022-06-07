import './Main.css';
const myURL = "http://localhost:3000/articles/";

function Main() {
  return (
    <main className="App-header">
      <p>This is the main part of the web page</p>
      <p>*** DEBUT ***</p>
      <ul>{
        fetch(myURL)
        .then(response => response.json())
        .then(data => {
          let myTmpHTML;
          for (const article of data.articles) {
            myTmpHTML += `<li>${article.title}</li>`;
          }
          return myTmpHTML;
        }).catch(console.error)
      }</ul>
      <p>*** FIN ***</p>
    </main>
  );
}

export default Main;