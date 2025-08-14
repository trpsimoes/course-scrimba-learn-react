import React from "react";


export default function Pad(props) {

/* 	const [isOn, setIsOn] = React.useState(props.on);

	function handleClick() {
		setIsOn(prev => !prev);
	}
 */

  return (
    <button
      className={props.on ? "on" : ""}
      style={{ backgroundColor: props.color }}
      onClick={
		() => props.toggle(props.id)
	}
    ></button>
  );
}
