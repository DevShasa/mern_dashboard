import { useState } from "react";
import PropTypes from 'prop-types'
import {
	LightModeOutlined,
	Search,
	DarkModeOutlined,
	Menu as MenuIcon,
	SettingsOutlined,
	ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../redux/themeslice";
import profileImage from "../assets/profile.jpeg";
import {
	AppBar,
	Button,
	IconButton,
	InputBase,
	Toolbar,
	useTheme,
    Box,
    Typography,
    Menu,
    MenuItem
} from "@mui/material";



const Navbar = (props) => {

    const {isSidebarOpen,setIsSidebarOpen, user } = props
	const theme = useTheme();
	const dispatch = useDispatch();

    const [ anchorElement, setAnchorElement ] = useState(null)
    const isOpen = Boolean(anchorElement)
    const handleClose = () => setAnchorElement(null)
    const handleClick = (event) => {
        // pass button into setAnchorelement
        setAnchorElement(event.currentTarget)
    }



	return (
		<AppBar
			sx={{
				position: "static",
				background: "none",
				boxShadow: "none",
                //  border:"1px solid red",
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between", }}>
				{/* Left side */}
				<FlexBetween>
					<IconButton onClick={setIsSidebarOpen}>
						<MenuIcon />
					</IconButton>
					<FlexBetween
						// backgroundcolor={theme.palette.background.alt}
                        backgroundColor={theme.palette.background.alt}
						borderRadius="9px"
						gap="3rem"
						p="0.1rem 1.5rem"
					>
						<InputBase placeholder="Search..." />
						<IconButton>
							<Search />
						</IconButton>
					</FlexBetween>
				</FlexBetween>


                {/* Right side */}
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={()=>dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? <DarkModeOutlined sx={{fontSize:"25px"}}/> : <LightModeOutlined sx={{fontSize:"25px"}}/>}
                    </IconButton>
                    <IconButton >
                        <SettingsOutlined />
                    </IconButton>

                    <Button 
                        onClick={handleClick}
                        sx={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            textTransform:"none",
                            gap:"1rem"
                        }}
                    >
                        <Box
                            component="img"
                            alt="profile"
                            src={profileImage}
                            height="35px"
                            width="35px"
                            borderRadius="50%"
                            sx={{objectFit:"cover"}}
                        />
                        <Box textAlign="left">
                            <Typography fontWeight="bold" fontSize="0.85rem" sx={{color: theme.palette.secondary[100]}}>
                                {user?.name}
                            </Typography>
                            <Typography fontSize="0.75rem" sx={{color: theme.palette.secondary[200]}}>
                                {user?.occupation}
                            </Typography>
                        </Box>
                        <ArrowDropDownOutlined sx={{color: theme.palette.secondary[300], fontSize:"35px"}} />
                    </Button>

                    <Menu
                        // the menu only appears in the dom when trigger is clicked
                        anchorEl={anchorElement}
                        open={isOpen}
                        onClose={handleClose}
                        anchorOrigin={{vertical:"bottom", horizontal:"center"}}
                    >
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </FlexBetween>
			</Toolbar>
		</AppBar>
	);
};
Navbar.propTypes ={
    setIsSidebarOpen: PropTypes.func,
    isSidebarOpen:PropTypes.bool,
    user:PropTypes.object,

}
export default Navbar;



