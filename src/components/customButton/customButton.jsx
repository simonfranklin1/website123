import "./CustomButton.css"

const CustomButton = ({ title, handleClick }) => {
    return (
        <button className="cta-button" onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton