import PropTypes from 'prop-types'

const ProductCard = props => {
    const {name} = props
  return (
    <div>{name}</div>
  )
}

ProductCard.propTypes = {
    name: PropTypes.string
}

export default ProductCard