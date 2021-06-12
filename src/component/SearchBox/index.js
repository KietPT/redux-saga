import { Component } from "react";
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField id="standard-basic" autoComplete="off" 
                label="Search box" className={classes.textField} onChange={handleChange} 
                    placeholder="Nhập từ khoá"
                />

            </form>
        )
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}
export default withStyles(styles)(SearchBox)