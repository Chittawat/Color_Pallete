import React, { Component } from 'react'
import Slider,{Range} from 'rc-slider'
import {Link} from 'react-router-dom'
import 'rc-slider/assets/index.css'
import './styles/Navbar.css'
import Select from '@material-ui/core/Select'
import { MenuItem,Snackbar,IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={format:'hex',open:false}
        this.handleChange=this.handleChange.bind(this)
        this.wrapper = React.createRef(); 
    }

    handleChange(evt){
        this.setState({format:evt.target.value,open:true},()=>{
            setTimeout(()=>{this.setState({open:false})},3000)
        })
        this.props.handleChange(evt.target.value)
    }

    closeSnackbar=()=>{
        this.setState({open:false})
    }

    render() {
        const {level, changeLevel,showingAllColors}= this.props;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to='/'>ReactColorPicker</Link>
                </div>
                {showingAllColors &&
                <div className="slider-container">
                    <span>Level : {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
                    </div>     
                </div>
                }
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
                    open={this.state.open} 
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Change to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{"aria-describeby":"message-id"}}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default Navbar
