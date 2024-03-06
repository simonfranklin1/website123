import { CustomButton } from "../../components";
import "./Start.css";

const Start = () => {
  return (
    <section id="section1">
        <div className="card-container4">
            <div className="card4">
                <div className="card-content4">
                    <div className="card-image4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3447/3447513.png"
                            alt="Mensagens" />
                    </div>
                    <p className="card-text4">Centralize e otimize sua comunicação no WhatsApp em
                        nossa plataforma em nuvem.
                    </p>
                    <CustomButton title={"VAMOS COMEÇAR?"} handleClick={() => window.location.href='#section2'} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start