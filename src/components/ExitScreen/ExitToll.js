import React from 'react'
import { Box, Typography, Button ,Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
function ExitToll() {
  return (
    <Stack direction={'row'} width={'75%'}>
    <Box flex={1} sx={{ height: "100vh" }}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit clicked");
      }}
    >
      <Box sx={{ position: "relative", top: "220px", left: "400px" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Exit
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
            id="outlined-basic"
            label="interchange"
            variant="outlined"
            sx={{ width: "32%" }}
          />
          <TextField
            id="outlined-basic"
            label="numberPlate"
            variant="outlined"
            sx={{ width: "32%" }}
          />
          <TextField
            id="outlined-basic"
            label="10/31/2022"
            variant="outlined"
            sx={{ width: "32%" }}
          />
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
          Calculate
        </Button>
        </Box>
      </Box>
     
    </form>
  </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:'25px',justifyContent:"center",alignItems:"center"}}>
        <Typography variant='h5'>Break Down of Cost</Typography>
        <Typography variant='body1'>Base Rate</Typography>
        <Typography variant='body1'>distance Cost Breakdown</Typography>
        <Typography variant='body1'>Sub-Total</Typography>
        <Typography variant='body1'>Discount/Other</Typography>
        <Typography variant='h5'>Total To Be Charged</Typography>
        </Box>
  </Stack>
  )
}

export default ExitToll