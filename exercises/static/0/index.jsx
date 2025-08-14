import { createRoot } from 'react-dom/client';

//1.  Create a root
const root = createRoot(document.getElementById('root'));

//2.  Render a React element into the root
root.render(<h1>Hello, World!</h1>);