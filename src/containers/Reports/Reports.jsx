import React from 'react'
import { reportsAndDashboards } from '../../database/database'
import Card from '../../components/Card/Card'
import { Fade } from 'react-awesome-reveal'
import { CardAnimation } from '../../animations/animations'

const Reports = () => {
    return (
        <section id="section3" style={{ background: "#fff" }}>
            <Fade duration={1500}>
                <h2 className="title-page-green">Relatorios e dashboards</h2>
            </Fade>
                <div className="card-container">
                    <CardAnimation>
                        {
                            reportsAndDashboards.map((item, index) => (
                                <Card key={index} image={item.image} text={item.text}/>
                            ))
                        }
                    </CardAnimation>
                </div>
        </section>
    )
}

export default Reports