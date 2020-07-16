import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles';
import {style} from "./styles/ColorBoxStyle"

class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state ={copied:false};
    }

    changeCopyState=()=>{
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1500)
        })
    }

    render() {
        const {name,background,paletteId,id,showingFullPalette,classes}= this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
            <div style={{background}} className={classes.ColorBox}>
                <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
                <div className={`${classes.copyMsg} ${copied && classes.copyMsgShow}`}>
                    <h1>Copied</h1>
                    <p className={classes.copyText}>{this.props.background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>

                {showingFullPalette && (
                <Link to={`/palette/${paletteId}/${id}`} onClick={e=>e.stopPropagation()}>
                <span className={classes.seeMore}>More</span>
                </Link>
                )}
            </div>
            </CopyToClipboard>
        )
    }
}


export default withStyles(style)(ColorBox)
