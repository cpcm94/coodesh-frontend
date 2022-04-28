import React, { useState } from 'react'
import { FormControl, InputAdornment, InputLabel } from '@mui/material'
import { StyledIcon, StyledInput } from './SearchBar.styles'

export const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState('')

  const handleTextChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <FormControl sx={{ width: '17.5rem' }} variant='outlined'>
      <InputLabel sx={{ marginTop: '-0.35rem' }}>Search</InputLabel>
      <StyledInput
        type='text'
        value={inputText}
        onChange={handleTextChange}
        endAdornment={
          <InputAdornment position='end'>
            <StyledIcon onClick={() => onSearch(inputText)}>
              {inputText}
            </StyledIcon>
          </InputAdornment>
        }
        label='Search'
      />
    </FormControl>
  )
}
