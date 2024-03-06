import React from 'react'
import { whatsAppConnections } from '../../database/database'
import Card from '../../components/Card/Card'

const WhatsAppConnections = () => {
  return (
    <section id="section4" style={{ background: "#20cd8d" }}>
        <h2 className="title-page-withe">Conexões WhatsApp's</h2>
        <div className="card-container">
            {
                whatsAppConnections.map((item, index) => (
                    <Card key={index} image={item.imageUrl} text={item.text} title={item.title} />
                ))
            }
        </div>
    </section>
  )
}

export default WhatsAppConnections