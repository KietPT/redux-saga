import Dashboard from '../../../component/Dashboard/index';
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class AdminLayoutRoute extends Component {
    render() {
        const {component: YourComponent ,...remainProps} = this.props
        return (
            <Route {...remainProps} 
            render={routeProps => {
                return (
                    <Dashboard {...remainProps}>
                        <YourComponent {...routeProps}/>
                    </Dashboard>
                )
            }}/>
        );
    }
}
AdminLayoutRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    exact: PropTypes.bool,
    name: PropTypes.string,
}

export default AdminLayoutRoute;
