import React from "react"
import Pad from "./components/Pad"
import padsData from "./pads"

export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

	function toggle(id) {
        pads.map(item => item.id === id ? {...item, on: !item.on} : item);
	}


    const buttonElements = pads.map(pad => (
        <Pad 
            id={pad.id} 
            color={pad.color}
            key={pad.id}
            on={pad.on} 
            toggle={toggle}
        />
    ))




    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
