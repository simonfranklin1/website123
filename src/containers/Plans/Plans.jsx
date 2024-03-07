import "./Plans.css";

const Plans = () => {
    return (
        <section id="section8">
            <h2 className="title-page-withe">Nossos Planos</h2>
            <div className="card-container">
                <div className="plans-card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="BOT" />
                            <span>R$ 20,00/M</span>
                        </div>
                    </div>
                    <p className="card-title-x">PLANO BÁSICO</p>
                    <ul>
                        <li>Relatórios</li>
                        <li>Suporte Online</li>
                        <li>Até 2 WhatsApp's simultâneos</li>
                    </ul>
                </div>
                <div className="plans-card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="BOT" />
                            <span>R$ 45,90/M</span>
                        </div>
                    </div>
                    <p className="card-title-x">PLANO PRO</p>
                    <ul>
                        <li>Relatórios</li>
                        <li>Suporte Online</li>
                        <li>Até 4 WhatsApp's simultâneos</li>
                        <li>Integração Via API.</li>
                    </ul>
                </div>
                <div className="plans-card">
                    <div className="card-content">
                        <div className="card-icon">
                            <img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png" alt="Descrição da imagem" />
                            <span>R$ 90,00/M</span>
                        </div>
                    </div>
                    <p className="card-title-x">PLANO PREMIUM</p>
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