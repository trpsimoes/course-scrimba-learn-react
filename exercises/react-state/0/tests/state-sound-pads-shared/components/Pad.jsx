import React from "react";


export default function Pad(props) {

	const [isOn, setIsOn] = React.useState(props.on);

	function handleClick() {
		setIsOn(prev => !prev);
	}


  return (
    <button
      className={isOn ? "on" : ""}
      style={{ backgroundColor: props.color }}
      onClick={handleClick}
    ></button>
  );
}
