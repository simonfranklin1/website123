import { Fade } from "react-awesome-reveal";
import "./WeOffer.css";

const WeOffer = () => {
  return (
    
    <section id="section2">
        <div className="card3">
            <Fade direction="left" duration={1500}>
                <div className="card-left">
                    <div className="card-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3074/3074047.png" alt="Descrições" />
                    </div>
                </div>
            </Fade>
            <Fade direction="right" duration={1500}>
                <div className="card-right">
                    <button className="Button-ref">
                        <a href="#section3">Relatórios</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section4">Conexões</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section5">Campanhas</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section6">API</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section7">Suporte</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section8">Planos</a>
                    </button>
                    <button className="Button-ref">
                        <a href="#section9">Contato</a>
                    </button>
                </div>
            </Fade>
        </div>
    </section>
  )
}

export default WeOffer