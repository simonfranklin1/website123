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
                            <img src="https://portais.univasf.edu.br/programadegestao/imagens/icon-whatsapp.png/@@images/image.png"
                                alt="Itens" />
                        </div>
                        <p className="card-title">WhatsApp's simultâneos</p>
                        <p className="card-text">Gerencie vários números do WhatsApp em um só lugar. Simplifique sua comunicação
                            e alcance seus clientes de forma eficiente com nossa plataforma.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Card