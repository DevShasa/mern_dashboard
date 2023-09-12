import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"
import PropTypes from 'prop-types'
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpRounded,
    PieChartOutlined
} from "@mui/icons-material"

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import FlexBetween from "./FlexBetween"
import profileImage from "../assets/profile.jpeg"

const navItems = [
    { text:"Dashboard", icon:<HomeOutlined/>},
    { text:"Client Facing", icon:null },
    { text:"Products", icon:<ShoppingCartOutlined /> },
    { text:"Customers", icon:<Groups2Outlined/> },
    { text:"Transactions", icon:<ReceiptLongOutlined/> },
    { text:"Geography", icon:<PublicOutlined/> },
    { text:"Sales", icon:null },
    { text:"Overview", icon:<PointOfSaleOutlined/> },
    { text:"Daily", icon:<TodayOutlined/> },
    { text:"Monthly", icon:<CalendarMonthOutlined/> },
    { text:"Breakdown", icon:<PieChartOutlined/> },
    { text:"Management", icon:null },
    { text:"Admin", icon:<AdminPanelSettingsOutlined/> },
    { text:"Perfomance", icon:<TrendingUpRounded/> },
]

const Sidebar = ({isDesktop, drawerWidth, isSidebarOpen, setIsSidebarOpen, }) => {

    const { pathname } = useLocation();
    const [ active, setActive ] = useState("");
    const navigate = useNavigate();
    const theme = useTheme()

    useEffect(()=>{
        setActive(pathname.substring(1)) // match active
    },[pathname])

  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={()=>setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    // modifying the 
                    "& .MuiDrawer-paper":{
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing:"border-box",
                        borderWidth: isDesktop ? 0 :"2px",
                        width: drawerWidth
                    }
                }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main} gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">
                                ECOMVISION
                            </Typography>
                        </FlexBetween>
                    </Box>
                    <List>

                    </List>
                </Box>
                <Box></Box>
            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar

Sidebar.propTypes={
    isDesktop: PropTypes.bool,
    drawerWidth: PropTypes.string,
    isSidebarOpen: PropTypes.bool,
    setIsSidebarOpen: PropTypes.func
};