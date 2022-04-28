import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Box, FormControl, InputLabel } from '@mui/material'

export const OrderByDateSelector = ({
  onOrderByChange,
  latestArticleFirst,
}) => {
  const handleChange = (e) => {
    onOrderByChange(e.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{ height: '2.75rem' }}>
        <InputLabel>Sort</InputLabel>
        <Select
          value={latestArticleFirst}
          label='Sort'
          onChange={handleChange}
          sx={{ height: '2.75rem' }}
        >
          <MenuItem value={false}>Mais antigas</MenuItem>
          <MenuItem value={true}>Mais novas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
