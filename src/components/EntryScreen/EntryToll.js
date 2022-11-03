import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from 'axios';
function EntryToll() {
  const [state,setState]=useState({
    startingPoint:"",
    numberPlate:'',
    date:""
  })

 
  return (
    <Box flex={1} sx={{ height: "100vh" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          
          axios
			.post('https://crudcrud.com/api/812f0fd3cdea4e75bc2330ad6952a5c3/user',state)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.log(error.message)
			})
        }}
      >
        <Box sx={{ position: "relative", top: "150px", left: "400px" }}>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            Entry
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
              id="outlined-basic"
              label="interchange"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e)=>{
                setState({...state,startingPoint:e.target.value})
                console.log(state)
              }}/>

            <TextField
              id="outlined-basic"
              label="NumberPlate"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e)=>{
                setState({...state,numberPlate:e.target.value})
                console.log(state)
              }}
            />
            <TextField
              id="outlined-basic"
              label="10/31/2022"
              variant="outlined"
              sx={{ width: "25%" }}
              onChange={(e)=>{
                setState({...state,date:e.target.value})
                console.log(state)
              }}
            />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", bottom: "25%", left: "60%" }}>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#ffc400",
              color: "black",
              height: "50px",
              width: "120px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EntryToll;
