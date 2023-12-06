import  { useState } from "react";
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
 import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../redux/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {

  // Return true if screen is more than 600px, if device is a desktop
  const isDesktop = useMediaQuery("(min-width:600px)")
  const userId = useSelector((state)=> state.theme.userId)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const {data} = useGetUserQuery(userId)

  
  //console.log("USER FROM FRONTEND::", data)

  const toggleSidebar = () =>{
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <Box width={"100%"} height={"100%"} display={isDesktop ? "flex" : "flex"}>
        <Sidebar
          user={data || {}}
          isDesktop={isDesktop}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
            <Navbar 
                user={data || {}}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={toggleSidebar}
            />
            <Outlet /> {/* Our components like <Dashboard /> appear here */}
        </Box>
    </Box>
  )
}

export default Layout