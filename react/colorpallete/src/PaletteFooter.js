import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import {style} from './styles/PaletteFooterStyle'

class PaletteFooter extends Component {
    render() {
        const {paletteName,emoji,classes} = this.props
        return (
                <footer className={classes.PaletteFooter}>
                   {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
               </footer>
        )
    }
}


export default withStyles(style)(PaletteFooter)