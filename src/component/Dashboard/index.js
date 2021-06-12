import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import * as uiActions from '../../actions/ui'
import cn from 'classnames'

class Dashboard extends Component {

    handleToggleSidebar = (value) => {
        const {uiActionsCreators} = this.props;
        const {showSidebar, hideSidebar} = uiActionsCreators
        if(value === true){
            showSidebar()
        }else{
            hideSidebar()
        }
    }

    render() {
        const { children, classes, name, isShowSidebar } = this.props
        return (
            <div className={classes.dashboard}>
                <Header name={name} isShowSidebar={isShowSidebar} onToggleSidebar={this.handleToggleSidebar}/>
                <div className={classes.wrapper}>
                    <Sidebar isShowSidebar={isShowSidebar} onToggleSidebar={this.handleToggleSidebar}/>
                    <div className={cn(classes.wrapperContent, {
                        [classes.shiftLeft]: isShowSidebar === false
                    })}>
                        {children}
                    </div>
                    {/* <div className={classes.wrapperContent}>
                        {children}
                    </div> */}
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    name: PropTypes.string,
    isShowSidebar: PropTypes.bool,
    uiActionsCreators: PropTypes.shape({
        showSidebar: PropTypes.func,
        hideSidebar: PropTypes.func,
    })
}

const mapState = state => {
    return {
        isShowSidebar: state.ui.isShowSidebar
    }
}

const mapDispatch = dispatch => {
    return {
        uiActionsCreators: bindActionCreators(uiActions, dispatch),
    }
}

const withConnect = connect(mapState, mapDispatch)

export default compose(withStyles(styles), withConnect)(Dashboard);