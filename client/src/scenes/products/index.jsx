import { useGetProductsQuery } from "../../redux/api";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

function Products() {
	const { data, isLoading } = useGetProductsQuery();
	return (
		<Box m="1.5rem 2.5rem">
			<Header title="Products" subtitle="See your list of products" />
			{data || !isLoading
                ? (
                    <Box
                        mt="20px"
                        display="grid"
                        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                        justifyContent="space-between"
                        rowGap="20px"
                        columnGap="1.33%"
                    >
                        {data.map((product)=>{
                            return(
                                <ProductCard 
                                    key={product?._id}
                                    name={product?.name}
                                    description={product?.description}
                                    price={product?.price}
                                    rating ={product?.rating}
                                    category={product?.category}
                                    supply={product?.supply}
                                    stat={product?.stat}
                                    id={product?._id}
                                />
                            )
                        })}
                    </Box>
                )
                : <Box>Loading...</Box>
            }
		</Box>
	);
}

export default Products;
