import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import MiniPalette from './MiniPalette'


const styles = {
    root:{
        backgroundColor:"blue",
        height:"100vh",
        display:"flex",
        alignItem:"flex-start",
        justifyContent:"center"
    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        flexWrap:"Wrap"
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white"
    },
    palette:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"
    }
};

class PaletteList extends Component {
    goToPallete=(id)=>{
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const {palettes, classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colours</h1>
                    </nav>
                    <div className={classes.palette}>
                        {palettes.map((palette)=>(
                            <MiniPalette {...palette} handleClick={()=>{this.goToPallete(palette.id)}}/>
                            )
                        )}
                    </div>              
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)
