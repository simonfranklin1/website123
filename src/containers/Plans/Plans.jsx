import React from 'react'

const Plans = () => {
    return (
        <section id="section8" style={{ background: "#182527" }}>
            <h2 className="title-page-withe">Nossos Planos</h2>
            <div className="card-container">
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="BOT" />
                            <span style={{ fontSize: "40px", fontWeight: "bold", fontFamily: "fantasy" }}>R$ 20,00/M</span>
                        </div>
                    </div>
                    <p className="card-title-x" style={{ marginTop: "20px" }}>PLANO BÁSICO</p>
                    <ul>
                        <li>Relatórios</li>
                        <li>Suporte Online</li>
                        <li>Até 2 WhatsApp's simultâneos</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="BOT" />
                            <span style={{ fontSize: "40px", fontWeight: "bold", fontFamily: "fantasy" }}>R$ 45,90/M</span>
                        </div>
                    </div>
                    <p className="card-title-x" style={{ marginTop: "20px" }}>PLANO PRO</p>
                    <ul>
                        <li>Relatórios</li>
                        <li>Suporte Online</li>
                        <li>Até 4 WhatsApp's simultâneos</li>
                        <li>Integração Via API.</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="Descrição da imagem" />
                            <span style={{ fontSize: "40px", fontWeight: "bold", fontFamily: "fantasy" }}>R$ 150,00/M</span>
                        </div>
                    </div>
                    <p className="card-title-x" style={{ marginTop: "20px" }}>PLANO PREMIUM</p>
                    <ul>
                        <li>Relatórios</li>
                        <li>Suporte Online</li>
                        <li>WhatsApp’s simultâneos ilimitados.</li>
                        <li>Integração Via API.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Plans