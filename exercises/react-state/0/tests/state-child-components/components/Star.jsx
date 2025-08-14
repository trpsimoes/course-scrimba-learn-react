import starFilled from "./../images/star-filled.png"
import starEmpty from "./../images/star-empty.png"

export default function Star({ isFilled, onClick }) {
    return (
        <img
            src={isFilled ? starFilled : starEmpty}
            alt={isFilled ? "filled star icon" : "empty star icon"}
            className="favorite"
            onClick={onClick}
        />
    )
}
