import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ModeIcon from "@mui/icons-material/Mode";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

export default function Services() {
  const style = {
    mainCon: {
      margin: "0px 95px",
      marginTop : "200px",
      "@media only screen and (max-width : 400px)" : {
        margin : "102px 5px"
      }
    },
    servTitle: {
      fontSize: "36px",
      fontFamily: "Poppins",
      fontWeight: "500",
      width: "346px",
      "@media only screen and (max-width : 400px)" : {
        fontSize : "24px",
        width : "259px",
        marginLeft : "39px"
      }
    },
    servMainCon: {
      display: "flex",
      justifyContent: "space-between",
      "@media only screen and (max-width : 400px)" : {
        flexDirection : "column"
      }
    },
    iconPen: {
      color: "white",
      height: "67px",
      width: "67px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    serv: {
      marginTop: "42px",
      width: "341px",
      height: "422px",
      borderRadius: "24px",
      "&:hover": {
        boxShadow: "0px 10px 30px",
      },
    },
    servInfoCon: {
      padding: "49px 34px",
    },
    servsubTitle: {
      marginTop: "35px",
      fontSize: "24px",
      fontFamily: "Poppins",
      fontWeight: "700",
    },
    servInfo: {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "400",
      color: "#4F4F4F",
      marginTop: "24px",
      width: "273px",
    },
    buttons: {
      textTransform: "none",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "500",
      width: "116px",
      height: "42px",
      backgroundColor: "#E0E0E0",
      color: "#828282",
      borderRadius: "12px",
      marginTop: "30px",
      "&:hover": {
        color: "#FFFFFF",
        backgroundColor: "#2D9CDB",
      },
    },
  };
  return (
    <Box sx={style.mainCon} id = 'Services'>
      <Box>
        <Typography sx={style.servTitle}>
          We offer high demand services
        </Typography>
      </Box>
      <Box sx={style.servMainCon}>
        <Paper sx={style.serv} elevation={0}>
          <Box sx={style.servInfoCon}>
            <Box sx={style.iconPen} style={{ backgroundColor: "#2D9CDB" }}>
              <ModeIcon style={{ fontSize: "27px" }} />
            </Box>
            <Typography sx={style.servsubTitle}>UI/UX Design</Typography>
            <Typography sx={style.servInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </Typography>
            <Button sx={style.buttons}>Get started</Button>
          </Box>
        </Paper>

        <Paper sx={style.serv} elevation={0}>
          <Box sx={style.servInfoCon}>
            <Box sx={style.iconPen} style={{ backgroundColor: "#27AE60" }}>
              <CodeIcon style={{ fontSize: "27px" }} />
            </Box>
            <Typography sx={style.servsubTitle}>Front End</Typography>
            <Typography sx={style.servInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </Typography>
            <Button sx={style.buttons}>Get started</Button>
          </Box>
        </Paper>

        <Paper sx={style.serv} elevation={0}>
          <Box sx={style.servInfoCon}>
            <Box sx={style.iconPen} style={{ backgroundColor: "#EB5757" }}>
              <StorageIcon style={{ fontSize: "27px" }} />
            </Box>
            <Typography sx={style.servsubTitle}>Back End</Typography>
            <Typography sx={style.servInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </Typography>
            <Button sx={style.buttons}>Get started</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
