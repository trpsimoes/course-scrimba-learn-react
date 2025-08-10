import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <img src="src/assets/react.svg"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is mantained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);


