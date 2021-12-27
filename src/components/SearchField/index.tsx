import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'

const SearchField: React.FC<{
  onEnter: (value: string) => void
}> = ({ onEnter }) => {
  const [value, setValue] = useState<string>('')
  return (
    <Box
      sx={{
        maxWidth: '500px',
        width: '100%',
        margin: 'auto'
      }}
    >
      <TextField
        value={value}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onEnter(value)
          }
        }}
        fullWidth
        onChange={e => setValue(e.target.value)}
        placeholder="Type here for search an user..."
        inputProps={{
          'data-testid': 'searchField'
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
    </Box>
  )
}

export default SearchField
