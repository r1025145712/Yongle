import React from 'react'
import './index.css'
import Head from './head'
import Hnav from './nav'
import Main from './main'
class Home extends React.Component {
    render() {
        return (
            <div className="page">
                <section className="container">
                    <div className="content">
                       <Head/>
                       <Hnav/>
                       <Main/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;