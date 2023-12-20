import { useGetGeographyQuery } from "../../redux/api";
import { geoData } from "../../redux/geoData";
import Header from "../../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";

const Geography = () => {
	const { data, isLoading } = useGetGeographyQuery();
	const theme = useTheme();

	console.log("THis is the data >>>", data);

	return (
		<Box m="1.5rem 2.5rem">
			<Header
				title="GEOGRAPHY"
				subtitle="Find where your users are located"
			/>
			<Box
				mt="40px"
				height="75vh"
				border={`1px solid ${theme.palette.secondary[200]}`}
				borderRadius="4px"
			>
				{data ? (
					<ResponsiveChoropleth
						theme={{
							axis: {
								domain: {
									line: {
										stroke: theme.palette.secondary[200],
									},
								},
								legend: {
									text: {
										fill: theme.palette.secondary[200],
									},
								},
								ticks: {
									line: {
										stroke: theme.palette.secondary[200],
										strokeWidth: 1,
									},
									text: {
										fill: theme.palette.secondary[200],
									},
								},
							},
							legends: {
								text: {
									fill: theme.palette.secondary[200],
								},
							},
							tooltip: {
								container: {
									color: theme.palette.primary.main,
								},
							},
						}}
						data={data}
						features={geoData.features}
						margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
						colors="nivo"
						domain={[0, 60]}
						unknownColor="#666666"
						label="properties.name"
						valueFormat=".2s"
						projectionScale={150}
						projectionTranslation={[0.45, 0.6]}
						projectionRotation={[0, 0, 0]}
						graticuleLineColor="#dddddd"
						borderWidth={0.3}
						borderColor="#fffff"
						legends={[
							{
								anchor: "bottom-right",
								direction: "column",
								justify: true,
								translateX: 0,
								translateY: -125,
								itemsSpacing: 0,
								itemWidth: 94,
								itemHeight: 18,
								itemDirection: "left-to-right",
								itemTextColor: "#d3d4de",
								itemOpacity: 0.85,
								symbolSize: 18,
								effects: [
									{
										on: "hover",
										style: {
											itemTextColor: "#d3d4de",
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				) : (
					<div>Loading ...</div>
				)}
			</Box>
		</Box>
	);
};

export default Geography;
