import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styles from './styles'
import { STATUS } from '../../constant';
import { Box, withStyles } from '@material-ui/core'
import TaskList from '../../component/TaskList';
import Grid from '@material-ui/core/Grid';
import TaskForm from '../TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task'
import * as modalActions from '../../actions/modal'
import SearchBox from '../../component/SearchBox';


class Taskboard extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask()
  }

  openForm = () => {
    const { taskActions } = this.props;
    const { setTask } = taskActions;
    setTask(null)

    const { modalActionsCreator } = this.props
    const { showModal, changeModalContent, changeModalTitle } = modalActionsCreator
    showModal()
    changeModalTitle('Thêm mới công việc')
    changeModalContent(<TaskForm />)
  }

  loadListTask = () => {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask()
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }

  renderForm() {
    let { classes } = this.props
    let { open } = this.state
    let html = ''
    html = (
      <TaskForm open={open} classes={classes} onClose={this.onClose} />
    )
    return html
  }

  handleEditTask = (task) => {
    const { taskActions } = this.props;
    const { setTask } = taskActions;
    setTask(task)
    const { modalActionsCreator } = this.props
    const { showModal, changeModalContent, changeModalTitle } = modalActionsCreator
    showModal()
    changeModalTitle('Cập nhật công việc')
    changeModalContent(<TaskForm />)
  }

  showMoalDeleteTask = (task) => {
    const { modalActionsCreator, classes } = this.props;
    const { showModal, changeModalContent, changeModalTitle, hideModal } = modalActionsCreator
    showModal()
    changeModalTitle('Xoá công việc')
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
            Ban chắc chắn muốn xoá <span className={classes.modalConfirmTextBold}>{task.title}</span> ? 
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box mf={1}>
          <Button variant="contained" onClick={hideModal}>Huỷ bỏ</Button>
          </Box>
          <Box>
          <Button variant="contained" color="primary" onClick={() => this.handleDeleteTask(task)}>Đồng ý</Button>
              </Box>
        </Box>
      </div>
    )
  }

  handleDeleteTask = task => {
    const {id} = task
    const { taskActions } = this.props
    const { deleteTask } = taskActions;
    deleteTask(id)
  }


  renderBoard() {
    let { classes, listTask } = this.props
    let html = '';
    html = (
      <Grid container spacing={2}>
        {
          STATUS.map((s, index) => {
            const taskFilter = listTask.filter(task => task.status === s.value);
            return <TaskList classes={classes} taskFilter={taskFilter} statusItem={s} key={index} onClickEdit={this.handleEditTask} onClickDelete={this.showMoalDeleteTask} />
          })
        }

      </Grid>
    )
    return html;
  }

  handleChange = (e) => {
    console.log(e)
    const { value } = e.target;
    const { taskActions } = this.props;
    const { filterTask } = taskActions;
    filterTask(value)

  }

  renderSearchBox = () => {
    let html = null
    html = (
      <SearchBox handleChange={this.handleChange} />
    )
    return html
  }


  render() {
    let { classes } = this.props
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
          <AddCircleIcon /> Add
      </Button>

        <Button variant="contained" color="primary" className={classes.button} onClick={this.loadListTask}>
          <AddCircleIcon /> Load
      </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}


      </div>

    );
  }


}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTask: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActionsCreator: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func
  }),
  listTask: PropTypes.array,
}

const mapState = state => {
  return {
    listTask: state.task.listTask,

  }

}

const mapDispatch = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
    modalActionsCreator: bindActionCreators(modalActions, dispatch)
  }
}



export default withStyles(styles)(connect(mapState, mapDispatch)(Taskboard));
