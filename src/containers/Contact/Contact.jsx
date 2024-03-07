import { CustomButton } from "../../components"

const Contact = () => {
    return (
        <section id="section9" style={{ backgroundColor: "#20cd8d" }}>
            <div className="card-container4">
                <div className="card4">
                    <div className="card-content4">
                        <div className="card-image4">
                            <img
                                style={{ marginBottom: "20px" }}
                                src="https://cdn-icons-png.flaticon.com/512/78/78925.png"
                                alt="Descrição da imagem"
                            />
                        </div>
                        <h2 className="title-page-withe">Venha saber mais?</h2>
                        <CustomButton title={"CHAMAR NO WHATSAPP"} handleClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=553183181298&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais.'} />
                        <p className="card-text4" style={{ marginTop: "10px" }}>Também estamos disponiveis no chat ao lado!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact