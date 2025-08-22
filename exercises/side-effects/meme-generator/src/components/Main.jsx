import React from 'react';

export default function Main() {

	const [meme, setMeme] = React.useState({
		topText: "One does not simply",
		bottomText: "Walk into Mordor",
		imgUrl: "http://i.imgflip.com/1bij.jpg"
	});

    const [allMemes, setAllMemes] = React.useState([]);

	function handleChange(event) {
		const {value, name} = event.currentTarget;
		setMeme(prev => ({
			...prev,
			[name]: value
		}));

	}


    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes));
    });


    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
						onChange={handleChange} 
						value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
						onChange={handleChange}
						value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}