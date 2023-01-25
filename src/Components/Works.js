import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SmartHomeImg from "../Assets/Images/smarthome.jpg";
import OnboardImg from "../Assets/Images/onboard.png";
import BookingImg from "../Assets/Images/booking.png";
import JuiceImg from "../Assets/Images/juice-product.png";

export default function Works() {
  const style = {
    mainCon: {
      margin: "0px 95px",
      marginTop: "194px",
    },
    title: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "36px",
      width: "448px",
    },
    workMainCon: {
        columnCount : "2",
        columnGap : "10px",
        
    },
    workCon: {
      margin: "0",
      display: "grid",
      gridTemplateRows: "1fr auto",
      marginBottom: "10px",
      breakInside: "avoid",
    },
    workImg:{
        display : "block",
        width : "100%",
        gridRow: "1 / -1",
        gridColumn: "1"
    }
  };
  return (
    <Box sx={style.mainCon}>
      <Box>
        <Typography sx={style.title}>
          Good design means good business
        </Typography>
      </Box>
      <Box sx = {style.workMainCon}>
        <Box sx={style.workCon}>
          <Box component="img" src={SmartHomeImg} sx = {style.workImg}></Box>
          <Box component="img" src={OnboardImg}></Box>
          <Box component="img" src={BookingImg}></Box>
          <Box component="img" src={JuiceImg}></Box>
        </Box>
      </Box>
    </Box>
  );
}
