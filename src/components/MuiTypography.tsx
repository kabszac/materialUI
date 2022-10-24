import React from 'react';
import { Typography } from '@mui/material';

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>          
            <Typography variant='h3'>h3 Heading</Typography>          
            <Typography variant='h4' component='h1'>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>
            
            <Typography variant='subtitle1'>h1 Heading</Typography>
            <Typography variant='subtitle2'>h1 Heading</Typography>

            <Typography variant='body1'>h1 Heading</Typography>
            <Typography variant='body2'>h1 Heading</Typography>
                        
           
          
            
        </div>   

    );
};

export default MuiTypography;