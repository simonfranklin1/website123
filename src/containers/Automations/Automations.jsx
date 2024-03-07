import { Fade } from "react-awesome-reveal";
import "./Automations.css";
import { ShowUpAnimation } from "../../animations/animations";

const Automations = () => {
    return (
        <section id="section5">
            <Fade duration={1500}>
                <h2 className="title-page-green">Mensagens em massa</h2>
            </Fade>
            <ShowUpAnimation>
                <div className="card-container">
                    <div>
                        <div className="card-content">
                            <div className="card-image">
                                <img src="https://neongoldfish.com/wp-content/uploads/2023/08/chatbot3.jpg" alt="Relatorios" />
                            </div>
                            <p className="card-title">Automações via Planilha</p>
                            <p className="card-text">Importe facilmente os dados de envio através de uma planilha online.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card-content">
                            <div className="card-image">
                                <img src="https://neongoldfish.com/wp-content/uploads/2023/08/chatbot3.jpg" alt="Mensagens" />
                            </div>
                            <p className="card-image-title">Modelos de mensagens</p>
                            <p className="card-image-text">Crie modelos de mensagens personalizados para uso em diversas planilhas.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card-content">
                            <div className="card-image">
                                <img src="https://neongoldfish.com/wp-content/uploads/2023/08/chatbot3.jpg" alt="Calendario" />
                            </div>
                            <p className="card-image-title">Datas dinâmicas</p>
                            <p className="card-image-text">Envie dinamicamente mensagens com base em diferentes datas contidas em
                                uma
                                única planilha, seguindo nossas regras de envio flexíveis.</p>
                        </div>
                    </div>
                </div>
            </ShowUpAnimation>
        </section>
    )
}

export default Automations