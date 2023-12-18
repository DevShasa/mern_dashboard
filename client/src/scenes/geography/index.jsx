import { useGetGeographyQuery } from "../../redux/api";


const Geography = () => {
	const { data, isLoading } = useGetGeographyQuery();

	console.log("THis is the data >>>", data)

	return <div>Geography</div>;
};

export default Geography;
