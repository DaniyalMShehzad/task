import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material/Toolbar";
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getData, signout, useruid, useruidhotel } from "../config/firebasefunc";
import { useEffect, useState } from "react";
import Png from "./png.gif";
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
const drawerWidth = 240;

export default function AdminAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const state = useSelector((e) => e);
    const [loader, setLoader] = useState(false);
    const [text, setText] = useState();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // console.log(state);
    let Logout = () => {
        dispatch(() => signout(navigate, setLoader));
    };
    useEffect(() => {
        dispatch(() => useruidhotel(setLoader, dispatch, navigate));
        // console.log(location.state);
      }, []);
    // console.log(state.useriddata.userid.type.type);
    let userid = { user: state.uiddata.userid };
    // console.log(userid);
    let condition = {}
    condition = { condition: state?.useriddata?.userid?.type?.type }
    useEffect(() => {
        // console.log(condition.condition);
        dispatch(() => getData(setLoader, dispatch, userid, navigate));
        // console.log(location.state);
    }, []);
    // useEffect(()=>{
    //   const firstData = window().location.pathname.split("/")
    // },[])                

    // console.log(firstData);
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div className="stateuiddata">
                <button onClick={() => Logout()}>signout</button>
            </div>
            <Divider />
            <List>
                {[ 'User'].map((e, index) => (
                    <ListItem button key={e} onClick={() => navigate(`/admin${e}`)}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={e} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {loader ? (
                <img src={Png} />
            ) : (

                (condition.condition === "user") ?
                    null
                    :
                    (condition.condition === "hotelManagment") ?
                    null
                    :
                    (condition.condition === "admin") ?
                        <Box sx={{ display: 'flex' }}>
                            <CssBaseline />
                            <AppBar
                                position="fixed"
                                sx={{
                                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                                    ml: { sm: `${drawerWidth}px` },
                                }}
                            >
                                <Toolbar>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ mr: 2, display: { sm: 'none' } }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" noWrap component="div">
                                        {text}
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Box
                                component="nav"
                                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                                aria-label="mailbox folders"
                            >
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true,
                                    }}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                                <Drawer
                                    variant="permanent"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Box>
                            <Box
                                component="main"
                                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                            >
                                <Toolbar />
                                <div>
                                    {props.children}
                                </div>
                            </Box>
                        </Box>
                        :
                        null
                        // navigate("/")
            )}
        </>
    );
}

AdminAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};