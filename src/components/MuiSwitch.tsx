import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log(checked)
    const handleChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    return (
        <Box>
            <FormControlLabel label='dark mode' control={<Switch checked={checked} onChange={handleChecked}/>}/> 
        </Box>
    );
};

export default MuiSwitch;