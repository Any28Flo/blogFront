import { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, MenuItem, Button} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const options = [
    {
        value: 'title',
        label: 'Title'
    },
    {
        value: 'author',
        label: 'Author'
    },
    {
        value: 'content',
        label: 'Content'
    }
]
const Filter = () => {

    const [filterType, setFilterType] = useState('title');
    const [stringPattern, setStringPattern] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setFilterType(event.target.value as string);
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStringPattern(event.target.value);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(filterType, stringPattern);
        const query= `/filter?${filterType}=${stringPattern}`
        console.log(query)
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                required
                id="filter-type"
                onChange={handleChangeInput}
            />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterType}
                    label="Filter By"
                    onChange={handleChange}
                >
                    {
                        options.map((option)=>{
                            return(
                                <MenuItem key={`opt-${option.value}`} value={option.value}>{option.label}</MenuItem>
                            )
                        })
                    }
                   
                </Select>
            </FormControl>
            <Button type="submit">Submit</Button>

        </Box>
    )
}

export default Filter