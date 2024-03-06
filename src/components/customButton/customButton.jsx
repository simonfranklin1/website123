import "./CustomButton.css"

const CustomButton = ({ title, handleClick }) => {
    return (
        <button className="Button-inicial" onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton