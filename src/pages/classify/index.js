import React from 'react'
import './index.css'
import Head from './head/index'
import Search from './search/index'
import Center from './center/index'

class Classify extends React.Component {
    render() {
        return (
                <div className="pb50">
                    <Head />
                    <Search />
                    <Center />
                </div>
        )
    }
}

export default Classify;