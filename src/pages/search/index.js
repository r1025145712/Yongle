import React from 'react'
import { PageContainer } from 'common/styled'
import { SearchContainer } from "./styled"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            flag: false
        }
    }
    render() {
        return (
            <PageContainer>
                <SearchContainer>
                    <h3 className="head-tit">搜索<a className="goback" ></a></h3>
                    <div className="title-search">
                        <form action="" className="input-kw-form">
                            <input type="search" ref="inputVal" onKeyDown={this.handleSou.bind(this)} placeholder="" className="searchtxt" />
                        </form> <i className="search-icon"></i> <a href="/" className="closes nuxt-link-active">取消</a>
                    </div>
                </SearchContainer >
            </PageContainer>
        )
    }
    handleSou(e) {
        if (e.keyCode === 13) {
            let val = this.refs.inputVal.value
            this.props.handleAsyncGet1(val);
             this.props.history.push("/s/"+val)
        }

    }
}

export default Search;