import ReactDOM from 'react-dom/client';

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);