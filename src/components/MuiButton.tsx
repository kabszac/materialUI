import React, { useState } from 'react';
import { Button,  Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats]= useState<string| null>(null)

    console.log({formats})
    const handleFormatChange = (event:React.MouseEvent<HTMLElement>, updatedFormats: string|null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={2} direction='column'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='text' href='https:kabszac.github.io'>MY site</Button>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='success'>Success</Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='success'>Success</Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='success'>Success</Button>

            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant = 'contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>}> Send</Button>
                <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send </Button>
            </Stack>
            <IconButton  aria-label='send-icon' color='success' size='medium'>
                <SendIcon/>
            </IconButton>
            <Stack direction='row'>
                <ButtonGroup variant='contained'>
                    <Button variant='contained'>Left</Button>
                    <Button variant='contained'>Center</Button>
                    <Button variant='contained'>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup 
                    variant='contained' 
                    orientation='vertical' 
                    size='large'
                    aria-label='alignment button group'
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange} exclusive>
                    <ToggleButton value='bold' aria-label='bold' > <FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
    );
};

export default MuiButton;