import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modal'
import CloseRounded from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';

class CommonModal extends Component {
    render() {
        const { open, classes, component, modalActionsCreator, title } = this.props
        const {hideModal} = modalActionsCreator
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseRounded className={classes.icon}  onClick={hideModal}/>
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        )

    }

}
CommonModal.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    component: PropTypes.object,
    title: PropTypes.string,
    modalActionsCreator: PropTypes.shape({
        hideModal: PropTypes.func,
    })

}

const mapState = state => {
    return {
        open: state.modal.showModal,
        component: state.modal.component,
        title: state.modal.title
    }
    
}

const mapDispatch = dispatch => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch),
    }
    
}


const withConnect = connect(mapState, mapDispatch)
export default compose(withStyles(styles), withConnect)(CommonModal);