import { 
  TextField,
  Grid,
  InputAdornment,
  MenuItem
 } from '@mui/material'
import React from 'react'
import ReactInputMask from 'react-input-mask';

const genresList = [
  {value: 'Femenino', label: 'Femenino'},
  {value: 'Masculino', label: 'Masculino'}
];

const Form = ({formValues, handleSubmit}) => {
  const handleChange = (event, textId='') => {
    const inputId = textId === '' ? event.target.id : textId;
    const value = event.target.value;
    handleSubmit(inputId, value);
  };
  return (
    <div style={{maxWidth: '700px'}}>
      <form>
      <Grid justifyContent={'center'} container spacing={2} sx={{mt:2}}>
        <Grid item xs={6} md={4}>
          <TextField
            type="text"
            variant="outlined"
            id="firstName"
            label="First Name"
            value={formValues.firstName || ''}
            onChange={handleChange}   
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField
            type="text"
            variant="outlined"
            id="lastName"
            label="Last Name"
            value={formValues.lastName || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <ReactInputMask
              mask="99/99/9999"
              value={formValues.birthDay || ''}
              onChange={handleChange}
              maskChar=""
            >
            {() => <TextField
              type="text"
              variant="outlined"
              id="birthDay"
              label="Birthday"
            />}
          </ReactInputMask>
        </Grid>
        <Grid item xs={4} md={4}>
        <TextField
            type="text"
            variant="outlined"
            id="gender"
            label="Gender"
            value={formValues.gender || ''}
            onChange={(event) =>handleChange(event, 'gender')}
            style={{ width: "130px" }}
            select
          >
            {genresList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        </Grid>
        <Grid item xs={6} md={4}>
          <ReactInputMask
              mask="999-99999999"
              value={formValues.cellphone || ''}
              onChange={handleChange}
              maskChar=""
            >
            {() => <TextField
              type="text"
              variant="outlined"
              id="cellphone"
              label="Cellphone"
            />}
          </ReactInputMask>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="text"
            variant="outlined"
            id="addressHome"
            label="Address Home"
            style={{ width: "250px" }}
            value={formValues.addressHome || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            variant="outlined"
            id="profession"
            label="Profession"
            value={formValues.profession || ''}
            onChange={handleChange}     
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            variant="outlined"
            id="incomes"
            label="Incomes"
            value={formValues.incomes || ''}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}      
          />
        </Grid>

      </Grid>
      
        
        {/* <Button variant="contained" color="primary">
          save
        </Button> */}
      </form>
    </div>
  )
}

export default Form