import "./Button.css";

const Button = ({ title, handleClick }) => {
  return (
    <button className="cta-button" onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button