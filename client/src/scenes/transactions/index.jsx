import { useState } from "react";
import { useGetTransactionsQuery } from "../../redux/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import DatGridCustomToolbar from "../../components/DatGridCustomToolbar";

const Transactions = () => {
    
    const theme = useTheme()

    // values to be passed to backend
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [sort, setSort]  = useState({})
    const [search, setSearch] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const { data, isLoading } = useGetTransactionsQuery({
        page, 
        pageSize, 
        sort: JSON.stringify(sort),
        search,
    });

	console.log("TRANSACTIONS DATA", data);

    const columns = [
        {field:"_id", headerName:"Transaction ID", flex: 1},
        {field:"userId", headerName:"User ID", flex: 1},
        {field:"createdAt", headerName:"Created At", flex: 1},
        {   
            field:"products", 
            headerName:"# of Products", 
            flex: 0.5, 
            sortable: false, 
            renderCell: (params) => <Box sx={{backgroundColor:"black"}}>{params.value.length}</Box>
        },
        {   
            field:"cost", 
            headerName:"Cost", 
            flex: 0.5, 
            sortable: false, 
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        },

    ]
	return (
        <Box m="1.5rem 2.5rem">
            <Header title="TRANSACTIONS" subtitle="List of transactions" />
            <Box 
                height={'80vh'}
                sx={{
                    "& .MuiDataGrid-root":{border:"none"},
                    "& .MuiDataGrid-cell":{borderBottom:"none"},
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                      },
                    "& .MuiDataGrid-virtualScroller": {
                        // backgroundColor: theme.palette.primary.light,
                    },
                }}
            >
                <DataGrid 
                    loading={isLoading || !data}
                    getRowId={(row)=> row._id}
                    rows={(data && data.transactions) || []}
                    columns={columns}
                    rowCount={(data && data?.total) || 0}
                    rowsPerPageOptions={[20, 50, 100]}
                    pagination
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={(newPage)=> setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onSortModelChange={(newSortModel)=> setSort(...newSortModel)}
                    components={{Toolbar: DatGridCustomToolbar}}
                    componentsProps={{toolbar:{searchInput, setSearchInput, setSearch}}}
                />
            </Box>
        </Box>
    )
};

export default Transactions;
