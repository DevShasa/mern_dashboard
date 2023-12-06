import PropTypes from 'prop-types'
import { Box, useTheme, Typography } from '@mui/material'

function Header(props) {
    const {title, subtitle} = props
    const theme = useTheme();
  return (
    <Box>
        <Typography
            variant='h2'
            color={theme.palette.secondary[100]}
            fontWeight={"bold"}
            sx={{mb:"5px"}}
        >
            {title}
        </Typography>
        <Typography variant='h5'  color={theme.palette.secondary[300]}>
            {subtitle}
        </Typography>
    </Box>
  )
}

Header.propTypes = {
    title:PropTypes.string,
    subtitle: PropTypes.string
}

export default Header
