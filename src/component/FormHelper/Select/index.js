import React from 'react';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types'
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import styles from './styles'


const renderFormHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>
}

renderFormHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
}

const renderSelectField = ({classes, input, label, meta: { touched, error }, children, ...custom }) => (

  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      // inputProps={
      //   {
      //     name: 'age',
      //     id: 'age-native-simple'
      //   }
      // }
      value={input.value}
    >
      {children}
    </Select>
    {renderFormHelper({ touched, error })}
  </FormControl>

)

renderSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
  classes: PropTypes.object,

}
export default withStyles(styles)(renderSelectField)