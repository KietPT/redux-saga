
import React from 'react';

import Box from '@material-ui/core/Box';
import styles from './styles'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';
import PropTypes from 'prop-types'


const TaskList = (props) => {
    let { classes, taskFilter, statusItem, onClickEdit, onClickDelete } = props
    
    return (
        (
            <Grid item md={4} xs={12} key={statusItem.value}>
                <Box mt={1} mb={1}>
                    <div className={classes.status}>
                        {statusItem.label}
                    </div>
                </Box>
                <div className={classes.listTask}>
                    {
                        taskFilter.map(task => {
                            return (
                                <TaskItem task={task} key={task.id} statusItem={statusItem} onClickEdit={() => onClickEdit(task)} onClickDelete={() => onClickDelete(task) }/>
                            )
                        })
                    }
                </div>
            </Grid>
        )
    )
}
TaskList.propTypes = {
    classes : PropTypes.object,
    taskFilter: PropTypes.array,
    statusItem: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func,
}
export default withStyles(styles)(TaskList)