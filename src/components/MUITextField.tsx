import { TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MUITextField = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }
    return (
        <Stack spacing={4}> 
            <Stack direction='row' spacing={2}>
                <TextField label='name' variant='outlined'/>
                <TextField label='name' variant='standard'/>
                <TextField label='name' variant='filled'/>
            </Stack>
            <Stack direction='row'>
                <TextField label='age' variant='outlined' required/>
            </Stack>
            <Stack direction='row'>
                <TextField 
                    label='password' 
                    variant='outlined' 
                    required 
                    helperText='do not share your password with anyone' 
                    type='password' 
                    disabled
                />
            </Stack>
            <Stack direction='row'>
                <TextField 
                    label='read only' 
                    variant='outlined'  
                    inputProps={{readOnly:true}} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField
                    label='Form Input'
                    required
                    helperText={
                        !value ? 'Required' : 'Do not share your password with anyone'
                    }
                    type='password'
                    error={!value}
                    value={value}
                    onChange={handleChange}
                />
            </Stack>
            <Stack direction='row'>
                {/* <TextField 
                    label='amount'  
                    inputProps={{
                        startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                    }} 
                /> */}

                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        startAdornment: <InputAdornment position='end'>kg</InputAdornment>
                    }}
                />

                <TextField 
                    label='Weight'
                    InputProps={{
                     endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                    }} 
                />
                <TextField 
                    label ='Password' 
                    type='password'  
                    InputProps={{
                        endAdornment: <InputAdornment position='start'><VisibilityIcon/></InputAdornment>
                    }}/>
            </Stack>
        </Stack>
    );
};

export default MUITextField;