import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonOne from "../Assets/Images/person1.png";
import PersonTwo from "../Assets/Images/person2.png";
import PersonThree from "../Assets/Images/person3.png";

export default function Team() {
  const style = {
    mainCon: {
      display: "flex",
      margin: "0px 95px",
      marginTop: "219.47px",
    },
    imgCon: {
      display : "flex",
      
    },
    images: {
      width: "291.43px",
      height: "300px",
      borderRadius: "24px",
      marginBottom : "20px"
    },
    firstimage : {
        marginTop : "85.47px",
        marginRight : "20px"
    },
    TextCon : {
        marginRight : "270px",
        marginTop : "85.47px"
    },
    title:{
        fontFamily : "Poppins",
        fontSize : '18px',
        fontWeight : '500',
        color : '#EB5757'
    },
    subtitle : {
        fontFamily : "Poppins",
        fontSize : '36px',
        fontWeight : '500',
        width : '285px',
        marginTop : '7px'
    },
    info : {
        fontFamily : "Poppins",
        fontSize : '16px',
        fontWeight : '400',
        width : '273px',
        marginTop : '14px',
        color : "#4F4F4F"
    }
  };
  return (
    <Box sx={style.mainCon}>
      <Box sx = {style.TextCon}> 
        <Typography sx = {style.title}>Meet our team</Typography>
        <Typography sx = {style.subtitle}>We are chilled and a laidback team</Typography>
        <Typography sx = {style.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Box sx={style.imgCon}>
        <Box sx = {style.firstimage}>
          <Box component="img" src={PersonThree} sx={style.images}></Box>
        </Box>
        <Box>
          <Box component="img" src={PersonTwo} sx={style.images}></Box>
          <Box component="img" src={PersonOne} sx={style.images}></Box>
        </Box>
      </Box>
    </Box>
  );
}
