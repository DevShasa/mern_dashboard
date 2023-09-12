import  { useState } from "react";
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
// import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {

  // Return true if screen is more than 600px, if device is a desktop
  const isDesktop = useMediaQuery("(min-width:600px)")

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  

  return (
    <Box width={"100%"} height={"100%"} display={isDesktop ? "flex" : "block"}>
        <Sidebar 
          isDesktop={isDesktop}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
            <Navbar 
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout