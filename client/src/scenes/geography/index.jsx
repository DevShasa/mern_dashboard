import { useGetGeographyQuery } from "../../redux/api";
import { geoData } from "../../redux/geoData";
import Header from "../../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";

const Geography = () => {
	const { data, isLoading } = useGetGeographyQuery();
	const theme = useTheme()



	console.log("THis is the data >>>", data)

	return (
		<Box m="1.5rem 2.5rem">
			<Header title="GEOGRAPHY" subtitle="Find where your users are located"/>
			<Box
				mt="40px"
				height="75vh"
				border={`1px solid ${theme.palette.secondary[200]}`}
				borderRadius="4px"
			>
				{data 
					? <>Chloropleth</>
					: <div>Loading ...</div>
				}
			</Box>
		</Box>
	)
};

export default Geography;
