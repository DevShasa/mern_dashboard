import { useGetGeographyQuery } from "../../redux/api";

const Geography = () => {
	const { data, isLoading } = useGetGeographyQuery();
	return <div>Geography</div>;
};

export default Geography;
