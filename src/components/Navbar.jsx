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
                                        "&:hover": { color: "#3182ce", backgroundColor: 'transparent'},
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
                            onClick={toggleDrawer(true)} 
                            sx={{
                            position: "absolute", 
                            top: 15, 
                            right: 20, 
                            zIndex: 1500, 
                            }}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                        )}

                        {/* Drawer */}
                        <Drawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)} 
                        PaperProps={{
                            sx: {
                            backgroundColor: "#ffffff", 
                            backdropFilter: "none", 
                            color: "#000",
                            zIndex: 1400, 
                            },
                        }}
                        ModalProps={{
                            sx: { zIndex: 1400 }, 
                        }}
                        >
                        {/* Close Icon inside the drawer */}
                        <Box
                            sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "10px", 
                            }}
                        >
                            <IconButton
                            edge="end"
                            color="inherit"
                            sx={{
                                position: "absolute", 
                                top: 15, 
                                right: 20, 
                                zIndex: 1500, 
                                }}
                            onClick={toggleDrawer(false)} 
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
