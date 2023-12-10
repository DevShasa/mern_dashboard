import { useGetCustomersQuery } from "../../redux/api"
import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { DataGrid } from "@mui/x-data-grid"



const columns = [
  {field:"_id", headerName:"ID", flex:1},
  {field:"name", headerName:"Name", flex:0.5},
  {field:"email", headerName:"Email", flex:1},
  {field:"phoneNumber", headerName:"Phone Number", flex:0.5, renderCell:(params)=>{
    return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
  }},
  {field:"country", headerName:"Countyry", flex:0.4},
  {field:"occupation", headerName:"Occupation", flex:1},
  {field:"role", headerName:"Role", flex:0.5},
]

const Customers = () => {
  const theme = useTheme()
  const {data, isLoading} = useGetCustomersQuery()

  //console.log("THEME", theme.palette.secondary)

  //console.log("CUSTOMERS DATA ===>",data)
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS"  subtitle="List of customers"/>
      <Box
        mt="40px"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root":{border:"none"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .MuiDataGrid-columnHeaders":{
              borderBottom:"none",
              color: theme.palette.secondary[100],
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-virtualScroller":{backgroundColor: theme.palette.primary.alt},
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                color: theme.palette.secondary[100],
                backgroundColor: theme.palette.background.alt
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
              color: `${theme.palette.secondary[200]} !important`,
            },

        }}
      >
        <DataGrid 
          loading={isLoading || !data}
          getRowId={(row)=> row._id}
          rows={data  || []}
          columns={columns}
        />
      </Box>
    </Box>
  )
}


export default Customers