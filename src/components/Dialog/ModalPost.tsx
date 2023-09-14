import { useState } from 'react'
import { Dialog, Button, DialogTitle, DialogContent, TextField, DialogActions, Box } from '@mui/material';
import { postMethod } from '../../db/api';
import { Types } from '../../context/blogReducer';
import { useAppContext } from '../../context';

const initState = {
    title: '',
    content: '',
    authorId:  1
}
const ModalPost = () => {
    const { dispatch } = useAppContext();

    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState(initState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const postData = async() => {
        try {
            const data = await postMethod('/posts',{title: newPost.title, content: newPost.content, authorId: newPost.authorId});
            setNewPost(initState);
            dispatch({
                type: Types.ADD_POSTS,
                payload: data.newPost
              })
            setOpen(false);

        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(2)
        console.log(newPost)
       postData()
    }

    return (
        <div  >
            <Button variant="outlined" onClick={handleClickOpen}>
                Create New Post
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Post</DialogTitle>
                <DialogContent >
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
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
                            autoFocus
                            margin="dense"
                            id="title"
                            name="title"

                            label="Title Post"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            value={newPost.title}
                        />
                        <TextField
                            margin="dense"
                            id="content"
                            name="content"
                            label="Write your thoughts..."
                            multiline
                            fullWidth
                            rows={4}
                            variant="standard"
                            onChange={handleChange}
                            value={newPost.content}

                        />
                        <Button type="submit">Create</Button>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ModalPost