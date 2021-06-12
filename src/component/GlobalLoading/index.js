import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import styles from './styles'
import images from './../../asset/images/loading.gif'
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as uiActions from '../../actions/ui'

class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props
        let html = null;
        if (showLoading) {
            html =
                <div className={classes.globalLoading}>
                    <img src={images} alt="loading" className={classes.icon} />
                </div>
        }
        return html;

    }

}
GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool
}

const mapState = state => {
    return {
        showLoading: state.ui.showLoading,
    }

}

const mapDispatch = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    }
}

const withConnect = connect(mapState, mapDispatch)
export default compose(withStyles(styles), withConnect)(GlobalLoading);