import React from 'react'
import { whatsAppConnections } from '../../database/database'
import Card from '../../components/Card/Card'
import { Fade } from 'react-awesome-reveal'
import { ShowUpAnimation } from '../../animations/animations'

const WhatsAppConnections = () => {
  return (
    <section id="section4" style={{ background: "#20cd8d" }}>
        <Fade duration={1500}>
          <h2 className="title-page-withe">Conexões WhatsApp's</h2>
        </Fade>
        <ShowUpAnimation>
          <div className="card-container">
              {
                  whatsAppConnections.map((item, index) => (
                      <Card key={index} image={item.imageUrl} text={item.text} title={item.title} />
                  ))
              }
          </div>
        </ShowUpAnimation>
    </section>
  )
}

export default WhatsAppConnections