import React from 'react'

const WhatsAppConnections = () => {
  return (
    <section id="section4" style={{ background: "#20cd8d" }}>
        <h2 className="title-page-withe">Conexões WhatsApp's</h2>
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <div style={{ marginBottom: "20px" }} className="card-icon">
                        <img src="https://portais.univasf.edu.br/programadegestao/imagens/icon-whatsapp.png/@@images/image.png"
                            alt="Itens" />
                    </div>
                    <p className="card-title">WhatsApp's simultâneos</p>
                    <p className="card-text">Gerencie vários números do WhatsApp em um só lugar. Simplifique sua comunicação
                        e alcance seus clientes de forma eficiente com nossa plataforma.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div style={{ marginBottom: "20px" }} className="card-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/4738/4738227.png" alt="Itens" />
                    </div>
                    <p className="card-title">Intervalo entre mensagens</p>
                    <p className="card-text">Nossa plataforma adota práticas de intervalo de mensagens para garantir uma
                        comunicação responsável e eficiente, mantendo a integridade do serviço.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div style={{ marginBottom: "20px" }} className="card-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54878.png" alt="Itens" />
                    </div>
                    <p className="card-title">Conexão simplificada</p>
                    <p className="card-text">Conecte-se sem complicações: gere seu próprio QRCode e acesse o WhatsApp Web
                        facilmente.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatsAppConnections