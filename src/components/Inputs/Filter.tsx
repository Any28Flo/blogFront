import { Box, TextField, FormControl, InputLabel, MenuItem, Button} from '@mui/material';
import Select from '@mui/material/Select';
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
type filterProps = {
    state: {type:string, stringPattern:string},
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
const Filter = ({state, onChange, onSubmit}: filterProps) => {

    
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
            onSubmit={onSubmit}
        >
            <TextField
                required
                id="filter-type"
                onChange={onChange}
                value={state.stringPattern}
                name="stringPattern"
            />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                <Select
                    name="type"
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.type}
                    label="Filter By"
                    onChange={onChange}
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