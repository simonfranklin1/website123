import "./API.css"
import { Fade } from "react-awesome-reveal"

const API = () => {
  return (
    <section id="section6">
        <div className="card3">
            <Fade duration={1500} direction="left">
                <div className="card-left">
                    <h2 className="title-card">Integração via API</h2>
                    <p>Você também pode integrar nossa plataforma
                        diretamente ao seu sistema por meio de
                        nossa API REST,
                        facilitando a comunicação entre os dois sistemas. Estamos sempre atentos às necessidades de nossos
                        parceiros para tornar a integração ainda mais fácil e desenvolver novas funcionalidades em conjunto.
                    </p>
                </div>
            </Fade>
            <Fade duration={1500} direction="right">
                <div className="card-right">
                    <img src="https://cdn-icons-png.flaticon.com/256/8099/8099220.png" alt="API" />
                </div>
            </Fade>
        </div>
    </section>
  )
}

export default API