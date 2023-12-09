import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Rating, CardActions, Collapse, useTheme, Button } from '@mui/material'
import { useState } from 'react'

const ProductCard = props => {
    const [isExpanded, setIsexpanded] = useState(false)
    const {id, name, description, price, rating, category, supply, stat} = props
    const theme = useTheme()
  return (
    <Card sx={{backgroundImage:"none", backgroundColor: theme.palette.background.alt, borderRadius:"0.55rem"}}>
      <CardContent>
        <Typography 
          sx={{fontSize: 14}}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant='h5' component="div">
          {name}
        </Typography>
        <Typography sx={{mb: "1.5rem"}} color={theme.palette.secondary[400]}>
          {Number(price).toFixed(2)} 
        </Typography>
        <Rating value={rating} readOnly/>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='primary'
          size="small"
          onClick={()=> setIsexpanded(!isExpanded)}
        >
          See more
        </Button>
      </CardActions>
      <Collapse 
          in={isExpanded} 
          timeout="auto" 
          unmountOnExit 
          sx={{
            color:theme.palette.neutral[300],
            padding:"1rem"
          }}

        > 
        <Typography>id: {id}</Typography>
        <Typography>Supply Left: {supply}</Typography>
        <Typography>Yearly sales this year {stat.yearlySalesTotal}</Typography>
        <Typography>Yearly units sold this year {stat.yearlyTotalSoldUnits}</Typography>

      </Collapse>
    </Card>
  )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.string,
    category: PropTypes.string,
    supply: PropTypes.string,
    stat: PropTypes.object,
    id: PropTypes.string,
}

export default ProductCard