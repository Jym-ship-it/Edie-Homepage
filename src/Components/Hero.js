import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import React from "react";
import HeroImg from "../Assets/Images/heroImage.jpg";

export default function Hero() {
  const style = {
    titleCon: {
      marginTop: "96px",
      marginLeft: "207px",
      "@media only screen and (max-width : 400px)": {
        marginLeft: "26.5px",
        marginTop: "48px",
      },
    },
    title: {
      fontSize: "18px",
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#2D9CDB",
      "@media only screen and (max-width : 400px)": {
        fontSize: "12px",
      },
    },
    subTitle: {
      fontSize: "48px",
      fontFamily: "Poppins",
      fontWeight: "500",
      width: "543px",
      marginTop: "16px",
      "@media only screen and (max-width : 400px)": {
        fontSize: "24px",
        width: "272px",
        marginTop: "0px",
      },
    },
    banner: {
      marginTop: "42px",
      backgroundImage: `url(${HeroImg})`,
      width: "1385px",
      height: "354px",
      borderRadius: "12px",
      backgroundSize: "cover",
      "@media only screen and (max-width : 400px)": {
        marginTop: "15px",
        width: "348px",
        height: "145px",
      },
    },
    contactCon: {
      marginTop: "42px",
      marginLeft: "207px",
      "@media only screen and (max-width : 400px)": {
        marginTop: "22px",
        marginLeft: "26.5px",
      },
    },
    story: {
      fontSize: "48px",
      fontFamily: "Poppins",
      fontWeight: "500",
      width: "366px",
      "@media only screen and (max-width : 400px)": {
        fontSize: "24px",
        width: "277px",
      },
    },
    help: {
      marginTop: "42px",
      fontSize: "18px",
      fontFamily: "Poppins",
      fontWeight: "400",
      width: "366px",
      "@media only screen and (max-width : 400px)": {
        marginTop: "33px",
        fontSize: "12px",
        width: "275px",
      },
    },
    textfieldLabel: {
      marginTop: "42px",
      fontSize: "14px",
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#828282",
      "@media only screen and (max-width : 400px)": {
        marginTop: "31px",
        fontSize: "10px",
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
  };
  return (
    <Box>
      <Box sx={style.titleCon}>
        <Typography sx={style.title}>Unhappy with your website ?</Typography>
        <Typography sx={style.subTitle}>
          We create Beautiful and fast web services
        </Typography>
      </Box>
      <Box>
        <Box sx={style.banner}></Box>
      </Box>
      <Box sx={style.contactCon}>
        <Typography sx={style.story}>Story, emotion and purpose</Typography>
        <Typography sx={style.help}>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </Typography>
        <Typography sx={style.textfieldLabel}>
          Want us to contact you?
        </Typography>
        <TextField
          sx={style.textField}
          variant="filled"
          placeholder="Email..."
          InputProps={{
            style: { borderRadius: "12px" },
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
  );
}
