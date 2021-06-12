import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import styles from './styles'
import PropTypes from 'prop-types'

const TaskItem = (props) => {
    let { task, statusItem, classes, onClickEdit, onClickDelete} = props
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {task.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {statusItem.label}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {task.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onClickEdit}>
                    Edit
                </Button>
                <Button size="small" color="primary" onClick={onClickDelete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

TaskItem.propTypes = {
    classes : PropTypes.object,
    task: PropTypes.object,
    statusItem: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func,
}
export default withStyles(styles)(TaskItem)