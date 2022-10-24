import React, { useState } from 'react';
import { Box , TextField,  MenuItem} from "@mui/material";

const MUISelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log(countries)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log({value})
        setCountries(typeof value === 'string' ? value.split(' ') : value)
      }
    return (
        <Box width='250px'>
            <TextField 
                label='Select country' 
                select value={countries} 
                onChange = {handleChange} 
                fullWidth 
                SelectProps={{
                    multiple:true
                }}
            >
                <MenuItem value='KEN'>Kenya</MenuItem>
                <MenuItem value='UG'>Uganda</MenuItem>
                <MenuItem value='TZ'>Tanzania</MenuItem>
            </TextField>
        </Box>
    );
};

export default MUISelect;