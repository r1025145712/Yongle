import React, { Component } from 'react';
import { ModifyContainer } from './styled'
import { modifyApi, modify1Api } from "api/axios"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { Toast } from 'antd-mobile';
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Modiy extends Component {
    constructor(props) {
        super()
        this.state = {
            name: localStorage.getItem("name") || {},
            urlPic: localStorage.getItem("urlPic") || {},
            id: localStorage.getItem("id") || {},
        }
    }
    render() {
        let { name, urlPic } = this.state
        let { input } = this.props
        return (
            <ModifyContainer>
                <h3 className="head-tit">资料修改<a href="#/admin" className="goback" ></a></h3>
                <div className="modify-name">
                    <div className="name">用户名:</div>

                    <input type="text" className="input" ref="inputVal" value={input} placeholder={name} onChange={this.handleVal.bind(this)} />
                </div>
                <div className="modify-name">
                    <div className="name">头像:</div>
                    <div class="photo">
                        <img className="" ref="tu" src={urlPic} alt="" />
                    </div>
                    <div class="upload-container">
                        <div class="upload">
                            <p>上传图片</p>
                            <input type="file" ref="img" onChange={this.handleImg.bind(this)} class="bookImg" />
                        </div>

                    </div>
                    <div className="modifyimg" onClick={this.handleData.bind(this, input)}>保存</div>
                </div>
            </ModifyContainer>
        );
    }
    handleVal() {
        let val = this.refs.inputVal.value
        this.props.handleAsyncGet(val);
    }
    async handleImg() {
        let formData = new FormData();
        //设置上传的文件以及文件的字段
        formData.append("booksLogo", this.refs.img.files[0]);
        let data = await modifyApi(formData)
        this.refs.tu.src = data.data.urlImage
        this.setState = ({
            urlPic: localStorage.getItem("urlPic") || {},
        })
    }
    async handleData(input) {
        let img = this.refs.tu.src
        let id = this.state.id;
        if(input!==""){
            let data = await modify1Api(input, img, id)
            if(data.data.status===1){
                Toast.success("保存成功",1)
                localStorage.setItem("urlPic",img)
                localStorage.setItem("name",input)
                setTimeout(()=>{
                    this.props.history.push("/mine")
                },1000)
              
            }
        }else{
            Toast.fail("昵称不能为空")
        }
      
   
    }
}

export default Modiy;