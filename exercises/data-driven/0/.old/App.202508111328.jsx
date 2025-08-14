import Header from '../src/components/Header.jsx';
import Entry from '../src/components/Entry.jsx';
import data from '../src/data.js';

export default function App() {

  const articles = data.map((article, index) => (
    <Entry 
      key={index}
      img={article.img}
      title={article.title}
      dates={article.dates}
      text={article.text}
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
