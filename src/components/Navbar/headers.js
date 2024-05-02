// import React, { useState } from 'react';
// import { AppBar, Toolbar, Tabs, Tab, Button, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
// // import AcUnitIcon from '@mui/icons-material/AcUnit';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Header = () => {
//     const [value, setValue] = useState(0);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const mobile = useMediaQuery('(max-width:600px)');

//     const buttonStyle = {
//         backgroundColor: 'white',
//         color: 'black',
//         borderRadius: 50,
//         padding: '10px 20px',
//         width: 140,
//         height: 35,
//     };

//     const handleMenuToggle = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const handleTabChange = (newValue) => {
//         setValue(newValue);
//         setMenuOpen(false); 
//     };

//     return (
//         <div>
//             <AppBar position="fixed" style={{ background: 'black' }}>
//                 <Toolbar>
//                     <IconButton size="large" edge="start" color="inherit" aria-label="menu" style={{ mr: 2 }}>
//                         {/* <AcUnitIcon /> */}
//                     </IconButton>
//                     <Box style={{ flexGrow: 1 }} />
//                     {mobile ? (
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             color="inherit"
//                             aria-label="menu"
//                             onClick={handleMenuToggle}
//                         >
//                             {/* {menuOpen ? <CloseIcon /> : <MenuIcon />} */}
//                         </IconButton>
//                     ) : (
//                         <Tabs
//                             style={{ '& .MuiTabs-indicator': { backgroundColor: 'white', ...(value === 3 && { display: 'none' }) // Hide the indicator for the "Contact Me" tab
//                          } }}
//                             textColor='white'
//                             value={value}
//                             onChange={(e, val) => setValue(val)}
//                         >
//                             <Tab label="About" onClick={() => handleTabChange(0)} />
//                             <Tab label="Skills" onClick={() => handleTabChange(1)} />
//                             <Tab label="Projects" onClick={() => handleTabChange(2)} />
//                             <Tab label="Contact Me" style={buttonStyle} onClick={() => handleTabChange(3)} />
//                         </Tabs>
//                     )}
//                     {/* {!mobile && <Button variant='contained' style={buttonStyle}>Contact me</Button>} */}
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 anchor="top"
//                 open={menuOpen}
//                 onClose={() => setMenuOpen(false)} // Close the drawer on overlay click
//                 elevation={1}
//                 ModalProps={{keepMounted: true}} // Ensure the drawer is mounted when open
//                 PaperProps={{ style: { top: '45px' } }} // Adjust top position to below the AppBar
//             >
//                 <List sx={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
//                     <ListItem button onClick={() => handleTabChange(0)}>
//                         <ListItemText primary="About" />
//                     </ListItem>
//                     <ListItem button onClick={() => handleTabChange(1)}>
//                         <ListItemText primary="Skills" />
//                     </ListItem>
//                     <ListItem button onClick={() => handleTabChange(2)}>
//                         <ListItemText primary="Projects" />
//                     </ListItem>
//                     <Divider />
//                     <ListItem button onClick={() => handleTabChange(2)}>
//                         <ListItemText primary="Contact Me" />
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </div>
//     );
// };

// export default Header;