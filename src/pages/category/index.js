import React from 'react'
// import './index.css'
import {PageContainer} from './styled'
import Head from './head/index'
import Search from './search/index'
// import Center from './center/index'
import Weekchoice from 'components/weekchoice'

class Classify extends React.Component {
    render() {
        return (
                <PageContainer className="pb50">
                    <Head />
                    <Search />
                    {/* <Center /> */}
                    <Weekchoice />
                </PageContainer>
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