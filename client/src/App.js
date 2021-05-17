import React, { useEffect } from "react";
import { Grid, Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux'

import Employees from "./Components/Employees/Employees";
import Form from "./Components/Form/Form";
import { getAllEmployees } from './actions/employees'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEmployees())
  },[dispatch])
  
	return (
		<div>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Employee Details</Typography>
            </Toolbar>
          </AppBar>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} lg={4}>
              <Form />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Employees />
            </Grid>
          </Grid>
        </Container>
		</div>
	);
};

export default App;
