import React from 'react';


export default function Joke(props) {
	
	const [isShown, setIsShown] = React.useState(false);

	const togglePunchline = () => {
		setIsShown((prev) => !prev);
	};

	return (
		<div className="joke">
    		{props.setup && <p className="setup">Setup: {props.setup}</p>}
            {isShown && <p className="punchline">Punchline: {props.punchline}</p>}
			<button onClick={togglePunchline}>
				{isShown ? "Hide Punchline" : "Show Punchline"}
			</button>
		</div>
	);

}