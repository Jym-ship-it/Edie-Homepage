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
      "&:hover": {
        cursor: "pointer",
      },
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
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: "flex" },
              color: "black",
              ml: "54px",
              fontSize: "36px",
              fontFamily: "Heebo",
              fontWeight: "800",
              "@media only screen and (max-width : 400px)": {
                ml: "10px",
                mt: "6.5px",
                mb: "6.5px",
                fontSize: "24px",
              },
            }}
          >
            Edie
          </Typography>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              mr: "54px",
              
            }}
          >
            <Box>
              <Link href="#" sx={style.linkmenu}>
                Home
              </Link>
              <Link sx={style.linkmenu} href = "#Services" >Services</Link>
              <Link sx={style.linkmenu} href = "#Work">Our works</Link>
              <Link sx={style.linkmenu} href = "#Clients">Clients</Link>
              <Link sx={style.linkmenu}>Contact</Link>
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
