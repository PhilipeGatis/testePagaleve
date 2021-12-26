import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useHistory, useLocation } from 'react-router-dom'

const SearchField: React.FC<{
  onEnter: (value: string) => void
}> = ({ onEnter }) => {
  const [value, setValue] = useState<string>('')
  return (
    <TextField
      value={value}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          onEnter(value)
        }
      }}
      onChange={e => setValue(e.target.value)}
      placeholder="Type here for search an user..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        )
      }}
      variant="outlined"
      sx={{
        width: '500px'
      }}
    />
  )
}

export default SearchField
