import React from 'react'
import { Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({ ExerciseVideos, name}) => {
  return (
    <Box sx={{ marginTop: { lg: '200px',xs: '20px'}}} p="20px">
        <Typography variant='h3' mb='33px'>
            watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name} </span>exercise videos

        </Typography>
        <stack justifyContent="flex-start" flexwrap="wrap" alignItems="center"
        sx={{
            flexDirection: { lg: 'row'},
            gap: { lg: '110px', xs: '0'}
        }}>

        </stack>
      
    </Box>
  )
}

export default ExerciseVideos
