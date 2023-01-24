import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "Services", "Our Works", "Clients", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography>Edie</Typography>
      <Divider />
      <Link href="#">hello</Link>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const style = {
    linkmenu: {
      color: "black",
      fontSize: "24px",
      fontFamily: "Poppins",
      fontWeight: "500px",
      textTransform: "none",
      marginLeft: "20px",
      textDecoration: "none",
      "&:hover" : {
        cursor : "pointer"
      }
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
              ml: "54px",
              mt: "21px",
              mb : "21px",
              fontSize: "36px",
              fontFamily: "Heebo",
              fontWeight: "800",
            }}
          >
            Edie
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              mr: "54px",
              mt: "21px",
              mb : "21px",
            }}
          >
            <Box>
              <Link href="#" sx = {style.linkmenu}>Home</Link>
              <Link  sx = {style.linkmenu}>Services</Link>
              <Link  sx = {style.linkmenu}>Our works</Link>
              <Link  sx = {style.linkmenu}>Clients</Link>
              <Link  sx = {style.linkmenu}>Contact</Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
