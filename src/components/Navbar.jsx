import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
    Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
    { name: "YouTube", link: "#youtube" },
    { name: "Topmate", link: "#topmate" },
    { name: "Contact", link: "#contact" },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);
    const [elevate, setElevate] = useState(false);

    const toggleDrawer = (state) => () => setOpen(state);

    useEffect(() => {
        const handleScroll = () => setElevate(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Slide appear={false} direction="down" in={true}>
            <AppBar
                position="fixed"
                elevation={elevate ? 4 : 0}
                sx={{
                    backgroundColor: elevate ? "rgba(255,255,255,0.6)" : "#ffffff",
                    color: "#000000",
                    backdropFilter: elevate ? "blur(10px)" : "none",
                    transition: "0.3s",
                    zIndex: 1300, 
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", minHeight: "72px" }}>
                    {/* Logo */}
                    <Typography variant="h5" component="div" fontWeight="bold">
                        Vasantharan
                    </Typography>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box>
                            {menuLinks.map((item) => (
                                <Button
                                    key={item.name}
                                    href={item.link}
                                    sx={{
                                        color: "inherit",
                                        textTransform: "none",
                                        fontSize: "17px",
                                        mx: 0.9,
                                        "&:hover": { color: "#22d3ee", backgroundColor: 'transparent'},
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && (
                    <>
                        {/* Hamburger Icon outside the drawer */}
                        {!open && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleDrawer(true)} // Open drawer when hamburger is clicked
                            sx={{
                            position: "absolute", // Position outside the drawer
                            top: 15, // Distance from the top
                            right: 20, // Distance from the right
                            zIndex: 1500, // Ensure the hamburger icon is above the drawer
                            }}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                        )}

                        {/* Drawer */}
                        <Drawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)} // Close drawer when clicking outside
                        PaperProps={{
                            sx: {
                            backgroundColor: "#ffffff", // solid white
                            backdropFilter: "none", // remove blur
                            color: "#000",
                            zIndex: 1400, // lower than the hamburger icon
                            },
                        }}
                        ModalProps={{
                            sx: { zIndex: 1400 }, // ensure modal root is above AppBar
                        }}
                        >
                        {/* Close Icon inside the drawer */}
                        <Box
                            sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "10px", // Add some padding for spacing
                            }}
                        >
                            <IconButton
                            edge="end"
                            color="inherit"
                            sx={{
                                position: "absolute", // Position outside the drawer
                                top: 15, // Distance from the top
                                right: 20, // Distance from the right
                                zIndex: 1500, // Ensure the hamburger icon is above the drawer
                                }}
                            onClick={toggleDrawer(false)} // Close the drawer
                            >
                            <CloseIcon sx={{ color: "black" }} />
                            </IconButton>
                        </Box>

                        {/* Menu List */}
                        <Box
                            sx={{ width: 250, mt: 5 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                            {menuLinks.map((item) => (
                                <ListItem key={item.name} disablePadding>
                                <ListItemButton component="a" href={item.link}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                                </ListItem>
                            ))}
                            </List>
                        </Box>
                        </Drawer>
                    </>
                    )}
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default Navbar;
