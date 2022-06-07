import './Main.css';
const myURL = "http://localhost:3000/articles/";

function Main() {
  return (
    <main className="App-header">
      <p>This is the main part of the web page</p>
      <p>{
        fetch(myURL)
        .then(response => response.json())
        .then(data => {
          for (const article of data.articles) {
          
          }
        }).catch(console.error)
      }</p>
    </main>
  );
}

export default Main;