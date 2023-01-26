
import { Link, Typography , Button, InputAdornment , TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const style = {
    mainCon: {
      width: "100vw",
      height: "385px",
      backgroundColor: "#100E1D",
      marginTop: "203px",
      "@media only screen and (max-width : 400px)" : {
        height : "800px",
        marginTop: "103px",
      }
    },
    subCon: {
      padding: "46px 168px",
      display: "flex",
      justifyContent: "space-between",
      "@media only screen and (max-width : 400px)" : {
        flexDirection : "column",
        padding : '41px 36px'
      }
    },
    linkCon: {
      display: "flex",
      flexDirection: "column",
    },
    links: {
      textDecoration: "none",
      color: "#FFFFFF",
      marginBottom: "18.4px",
      fontSize: "18px",
      fontFamily: "Poppins",
      fontWeight: "400",
    },
    infoWebCon : {
        "@media only screen and (max-width : 400px)": {
            display : 'flex',
            flexDirection : 'column'
          },
    },
    webTitle: {
      fontFamily: "Heebo",
      fontSize: "36px",
      fontWeight: "800",
      color: "#FFFFFF",
      "@media only screen and (max-width : 400px)": {
        marginTop : "64px"
      },
    },
    icons: {
      marginRight: "11px",
      color: "#FFFFFF",
    },
    textfieldLabel: {
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: "500",
        color: "#FFFFFF",
        "@media only screen and (max-width : 400px)": {
          fontSize: "10px",
          marginTop : '65px',
          color : "#828282"
        },
    },
    textField: {
        marginTop: "9px",
        width: "350px",
        height: "57px",
        "@media only screen and (max-width : 400px)": {
          width: "291px",
          height: "47px",
        },
    },
    inputBtn: {
        width: "94px",
        height: "49px",
        borderRadius: "12px",
        textTransform: "none",
        fontSize: "18px",
        fontFamily: "Poppins",
        fontWeight: "500",
        color: "#FFFFFF",
        backgroundColor: "#2D9CDB",
        "@media only screen and (max-width : 400px)": {
          width: "71px",
          height: "39px",
          fontSize: "14px",
        },
      },
      user : {
        textAlign : 'center',
        color : '#FFFFFF',
        fontSize : "14px",
        fontFamily : "Poppins",
        fontWeight : "500",
        "@media only screen and (max-width : 400px)": {
            marginTop : '154px'
        }
      }
  };
  return (
    <Box id="Contact" sx={style.mainCon}>
      <Box sx={style.subCon}>
        <Box sx={style.linkCon}>
          <Link sx={style.links} href="#">
            Home
          </Link>
          <Link sx={style.links} href="#">
            Services
          </Link>
          <Link sx={style.links} href="#">
            Our Works
          </Link>
          <Link sx={style.links} href="#">
            Clients
          </Link>
          <Link sx={style.links} href="#">
            Contact
          </Link>
        </Box>
        <Box sx = {style.infoWebCon}>
          <Typography sx={style.webTitle}>Edie</Typography>
          <Box sx={style.iconCon}>
            <Link
              sx={style.icons}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              sx={style.icons}
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link sx={style.icons} href="https://twitter.com/" target="_blank">
              <TwitterIcon />
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography sx={style.textfieldLabel}>
            Want us to contact you?
          </Typography>
          <TextField
            sx={style.textField}
            variant="filled"
            placeholder="Email..."
            InputProps={{
              style: { borderRadius: "12px" , backgroundColor : "#FFFFFF" , fontFamily : "Poppins"},
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <Button sx={style.inputBtn}>Join</Button>
                </InputAdornment>
              ),
            }}
            inputProps={{ style: { padding: "16.5px 12px" } }}
          ></TextField>
        </Box>
      </Box>
      <Box sx = {style.user}>
        <Typography>created by username - devChallenges.io</Typography>
      </Box>
    </Box>
  );
}
