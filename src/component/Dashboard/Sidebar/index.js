import React, { Component } from 'react';
import { List, ListItem, withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import {ADMIN_ROUTES} from '../../../constant/index'
import {NavLink} from 'react-router-dom'



class Sidebar extends Component {

    handleDrawerToggle = (value) => {
    
      const {onToggleSidebar} = this.props
      if(onToggleSidebar){
        onToggleSidebar(value)
      }
    }

    renderList = () => {
      const {classes} = this.props
      let html = null;
      html = (
        <div className={classes.list}>
          <List component="div">
            {ADMIN_ROUTES.map(row => {
              return (
                <NavLink key={row.path} to={row.path} exact={row.exact} 
                className={classes.menuLink} activeClassName={classes.menuLinkActive}>
                <ListItem key={row.path} className={classes.listItem} button>
                  {row.name}
                </ListItem>
                </NavLink>
              )
            })}
          </List>
        </div>
      )
      return html;
    }
    
    render() {
        const {classes, isShowSidebar} = this.props
        
        return (
          <Drawer
          open={isShowSidebar}
          onClose={() => this.handleDrawerToggle(false)}
          classes={{
            paper: classes.drawerPaper
          }}
          variant="persistent"
        >
      {this.renderList()}
        </Drawer>
          );
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object,
    isShowSidebar: PropTypes.bool,
    onToggleSidebar: PropTypes.func,
}

export default withStyles(styles)(Sidebar);
