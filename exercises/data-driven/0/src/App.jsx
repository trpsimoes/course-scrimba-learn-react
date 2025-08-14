import Header from './components/Header';
import Entry from './components/Entry';
import data from './data.js';

export default function App() {

  const articles = data.map(article => (
    <Entry 
      key={article.id}
      {...article}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">
      {articles}
      </main>
    </>
  );
}
