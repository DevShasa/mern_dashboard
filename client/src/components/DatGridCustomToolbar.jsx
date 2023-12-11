import { useState } from "react";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton,
} from "@mui/x-data-grid"
import FlexBetween from "./FlexBetween";

const DatGridCustomToolbar = ({searchInput, setSearchInput, setSearch}) =>{
    return (
        <GridToolbarContainer>
            <FlexBetween width={'100%'}>
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DatGridCustomToolbar