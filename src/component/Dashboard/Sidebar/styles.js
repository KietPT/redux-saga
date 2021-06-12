const drawerWidth = 240;

const styles = (theme) => ({
    drawerPaper: {
        width: drawerWidth,
        zIndex: 10,
        maxWidth: 240,
        height: '100%',
        position: 'relative'
      },
      menuLink: {
          textDecoration: 'none',
          color: theme.color.defaultTextColor
      },
      menuLinkActive: {
          '&>div': {
              backgroundColor: theme.color.hoverColor
          }
      }
  })
export default styles