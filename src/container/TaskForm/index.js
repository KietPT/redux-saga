import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modal'
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../component/FormHelper/TextField'
import renderSelectField from '../../component/FormHelper/Select'
import validate from './validate'
import * as taskActions from '../../actions/task'
import MenuItem from '@material-ui/core/MenuItem'

class TaskForm extends Component {

    handleSubmitForm = (data,) => {
        const { taskActionsCreator, taskEdit } = this.props
        const { addTask, editTask } = taskActionsCreator;
        const { title, description, status } = data
        if (taskEdit && taskEdit.id) {
            editTask(title, description, status)
        } else { 
            addTask(title, description) 
        }

    }

    renderStatusSelection = () => {
        let html = null;
        const { taskEdit, classes } = this.props
        if (taskEdit && taskEdit.id) {
            html = (
                <Field id="status" label="Trạng thái" name="status"
                    component={renderSelectField}
                    label="Trạng thái" className={classes.select}
                >
                    <MenuItem value={0} >Ready</MenuItem>
                    <MenuItem value={1} >In Progress</MenuItem>
                    <MenuItem value={2} >Done</MenuItem>
                </Field>


            )
        }
        return html;
    }


    render() {
        const { classes, modalActionsCreator, handleSubmit, invalid, submitting } = this.props
        const { hideModal } = modalActionsCreator

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>

                    <Grid item md={12}>
                        <Field id="title" label="Tiêu đề" className={classes.textField} margin="normal"
                            name="title" component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field id="description" label="Mô tả" className={classes.textField} margin="normal"
                            name="description" component={renderTextField} />
                    </Grid>
                    {this.renderStatusSelection(classes)}
                    <Grid item md={12}>
                        <Button color="primary" type="submit" disabled={invalid || submitting}>Lưu lại</Button>
                        <Button onClick={hideModal} >Huỷ bỏ</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionsCreator: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskActionsCreator: PropTypes.shape({
        addTask: PropTypes.func,
        editTask: PropTypes.func,
    }),
    taskEdit: PropTypes.object
}


const mapState = state => {
    return {
        taskEdit: state.task.taskEdit,
        initialValues: {
            title: state.task.taskEdit ? state.task.taskEdit.title : null,
            description: state.task.taskEdit ? state.task.taskEdit.description : null,
            status: state.task.taskEdit ? state.task.taskEdit.status : null
        },
    }
}

const mapDispatch = dispatch => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch),
        taskActionsCreator: bindActionCreators(taskActions, dispatch)
    }

}

const FORM_NAME = 'TASK_MANAGEMENT'

const withConnect = connect(mapState, mapDispatch)

const withReduxForm = reduxForm({
    form: FORM_NAME, validate
})

export default compose(withStyles(styles), withConnect, withReduxForm)(TaskForm);
