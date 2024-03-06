import React from 'react'
import { reportsAndDashboards } from '../../database/database'
import Card from '../../components/Card/Card'

const Reports = () => {
    return (
        <section id="section3" style={{ background: "#fff" }}>
            <h2 className="title-page-green">Relatorios e dashboards</h2>
            <div className="card-container">
                {
                    reportsAndDashboards.map((item, index) => (
                        <Card key={index} image={item.image} text={item.text}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Reports