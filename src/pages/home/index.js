import React from 'react'
// import './index.css'
import Head from './head'
import Hnav from './nav'
import Main from './main'
import {PageContainer} from './styled'
class Home extends React.Component {
    render() {
        return (
            <PageContainer>
                <section className="container">
                    <div className="content">
                       <Head/>
                       <Hnav/>
                       <Main/>
                    </div>
                </section>
            </PageContainer>
        )
    }
}

export default Home;