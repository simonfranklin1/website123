import "./Card.css";

const Card = ({ title, text, image }) => {
    return (
        <div className="card">
            {
                !title && (
                    <div className="card-content">
                        <div className="card-icon">
                            <img src={image} alt="Itens" />
                        </div>
                        <p className="card-text">
                            {text}
                        </p>
                    </div>
                ) || (
                    <div className="card-content">
                        <div style={{ marginBottom: "20px" }} className="card-icon">
                            <img src={image}
                                alt="Itens" />
                        </div>
                        <p className="card-title">{title}</p>
                        <p className="card-text">
                            {text}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Card