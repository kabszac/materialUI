import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
    const [acceptTNC, setAcceptTNC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    console.log({acceptTNC})
    console.log({skills})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTNC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = skills.indexOf(event.target.value)
        if (value === -1){
            setSkills([...skills, event.target.value])
        } else{
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    return (
        <Box>
           <Box>
            <FormControlLabel 
                label='I accept terms and conditions'
                control={<Checkbox checked={acceptTNC} onChange =  {handleChange}/>}
            />
          </Box> 
          <Box>
            <Checkbox 
                icon={<BookmarkBorderIcon/>} 
                checkedIcon={<BookmarkIcon/>}
                checked={acceptTNC}
                onChange={handleChange} />
          </Box>

          <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        value='HTML'
                        control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS'
                        value='CSS'
                        control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='JS'
                        value='JS'
                        control={<Checkbox checked={skills.includes('JS')} onChange={handleSkillChange}/>}
                    />
                    
                </FormGroup>
            </FormControl>
          </Box>
        </Box>
    );
};

export default MuiCheckbox;