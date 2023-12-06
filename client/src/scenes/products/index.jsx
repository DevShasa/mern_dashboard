import { useGetProductsQuery } from "../../redux/api";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

function Products() {
	const { data, isLoading } = useGetProductsQuery();

	console.log("PRODUCTS QUERY:::", data);


	return (
		<Box m="1.5rem 2.5rem">
			<Header title="Products" subtitle="See your list of products" />
			{data || !isLoading
                ? (
                    <Box>
                        {data.map((product)=>{
                            return(
                                <ProductCard 
                                    key={product?._id}
                                    name={product?.name}
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
