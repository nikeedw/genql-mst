export const textFieldProps = {
    className: 'px-2',
    InputProps: {
        style: { color: 'gray' },
    },
    InputLabelProps: {
        style: { color: 'gray' },
    },
    sx: {
        '& .MuiInputBase-input': {
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: 'gray',
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'cornflowerblue',
        },
    },
}
