import React, { Component } from 'react';

import styles from './styles'
import { withStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../common/Theme'
import { Provider } from 'react-redux'
import configStore from '../../redux/configStore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../component/GlobalLoading';
import Modal from '../../component/Modal';
import { BrowserRouter, Switch } from 'react-router-dom'
import {ADMIN_ROUTES} from '../../constant'
import AdminLayoutRoute from '../../common/Layout/AdminLayoutRoute';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configStore();



function App() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
          <CssBaseline/>
            <ToastContainer />
            <GlobalLoading />
            <Modal />
            <Switch>
              {renderAdminRoute()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  
}
const renderAdminRoute = () => {
  let html = null
  html = ADMIN_ROUTES.map(route => {
    return (
      <AdminLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name} 
      />
    )
  })
  return html;
}



export default withStyles(styles)(App);
