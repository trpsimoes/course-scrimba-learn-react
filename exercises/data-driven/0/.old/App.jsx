import Header from './components/Header';
import Entry from './components/Entry';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry 
          img={{src: '/src/assets/articles/188da2c4e143f205acb5ae4dc702b16f370e7994.png', alt: 'Mount Fuji'}} 
          title="Mount Fuji" 
          date="12 Jan, 2021 - 24 Jan, 2021" 
          description="This is a sample description for the entry."
        />
      </main>
    </>
  );
}
