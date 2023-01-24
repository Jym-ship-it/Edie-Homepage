import { AccountCircle } from "@mui/icons-material";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { fontWeight, width } from "@mui/system";
import React from "react";
import HeroImg from "../Assets/Images/heroImage.jpg";

export default function Hero() {
  const style = {
    titleCon: {
      marginTop: "96px",
      marginLeft: "207px",
    },
    title: {
      fontSize: "18px",
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#2D9CDB",
    },
    subTitle: {
      fontSize: "48px",
      fontFamily: "Poppins",
      fontWeight: "500",
      width: "543px",
      marginTop: "16px",
    },
    banner: {
      marginTop: "42px",
      backgroundImage: `url(${HeroImg})`,
      width: "1385px",
      height: "354px",
      borderRadius: "12px",
      backgroundSize: "cover",
    },
    contactCon: {
      marginTop: "42px",
      marginLeft: "277px",
    },
    story: {
      fontSize: "48px",
      fontFamily: "Poppins",
      fontWeight: "500",
      width: "366px",
    },
    help: {
      marginTop: "42px",
      fontSize: "18px",
      fontFamily: "Poppins",
      fontWeight: "400",
      width: "366px",
    },
    textfieldLabel: {
      marginTop: "42px",
      fontSize: "14px",
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#828282",
    },
    textField: {
      marginTop: "9px",
      width: "350px",
      height: "57px",
    },
    inputBtn : {
        width : "94px",
        height : "49px",
        borderRadius : "12px",
        textTransform : "none",
        fontSize : "18px",
        fontFamily : "Poppins",
        fontWeight : "500",
        color : "#FFFFFF",
        backgroundColor : "#2D9CDB"
    }
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
            endAdornment: 
            <InputAdornment position="end">
            <Button sx = {style.inputBtn}>Join</Button>
            </InputAdornment>,
          }}
          inputProps={{ style: { padding: "16.5px 12px" } }}
        ></TextField>
      </Box>
    </Box>
  );
}
