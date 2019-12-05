import React from 'react'
import {PageContainer} from './styled'
import Head from './head/index'
import Search from 'components/seach'
import Weekchoice from 'components/main'
import {HashRouter} from "react-router-dom"

class Classify extends React.Component {
    render() {
        return (
            <HashRouter>
                <PageContainer className="pb50">
                    <Head />
                    <Search />
                    {/* <Center /> */}
                    <Weekchoice />
                </PageContainer>
            </HashRouter>
        )
    }
}

export default Classify;


// import React from 'react'
// import {PageContainer} from 'common/styled'
// class Classify extends React.Component{
//     render(){
//         return(
//             <PageContainer>分类</PageContainer>
//         )
//     }
// }

// export default Classify;