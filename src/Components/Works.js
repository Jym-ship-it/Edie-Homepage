import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SmartHomeImg from "../Assets/Images/smarthome.jpg";
import OnboardImg from "../Assets/Images/onboard.png";
import BookingImg from "../Assets/Images/booking.png";
import JuiceImg from "../Assets/Images/juice-product.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Works() {
  const style = {
    mainCon: {
      margin: "0px 95px",
      marginTop: "194px",
      "@media only screen and (max-width : 400px)": {
        margin: "155px 5px",
      },
    },
    title: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "36px",
      width: "448px",
      "@media only screen and (max-width : 400px)": {
        fontSize: "24px",
        width: "259px",
        marginLeft: "39px",
      },
    },
    workCon: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    smartCon: {
      marginTop: "188px",
      "@media only screen and (max-width : 400px)": {
        marginTop: "38px",
      },
    },
    mobileSmartCon: {
      "@media only screen and (max-width : 400px)": {
        marginTop: "38px",
      },
    },
    img: {
      width: "545px",
      height: "545px",
      borderRadius: "12px",
      "@media only screen and (max-width : 400px)": {
        width: "350px",
        height: "350px",
      },
    },
    Info: {
      marginTop: "20px",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: "300",
      color: "#828282",
      "@media only screen and (max-width : 400px)": {
        fontSize: "12px",
      },
    },
    workTitle: {
      fontFamily: "Poppins",
      fontSize: "24px",
      fontWeight: "500px",
      "@media only screen and (max-width : 400px)": {
        fontSize: "18px",
      },
    },
    links: {
      display: "flex",
      alignItems: "center",
      fontSize: "24px",
      fontWeight: "500px",
      fontFamily: "Poppins",
      textTransform: "none",
      textDecoration: "none",
      "@media only screen and (max-width : 400px)": {
        fontSize: "18px",
      },
    },
    buttonCon: {
      display: "flex",
      justifyContent: "right",
      "@media only screen and (max-width : 400px)": {
        justifyContent: "left",
        marginTop: "35.64px",
      },
    },
  };
  return (
    <Box sx={style.mainCon} >
      <Box  id = 'test'>
        <Typography sx={style.title}>
          Good design means good business
        </Typography>
        <Box sx={style.workCon}>
          <Box sx={style.smartCon}>
            <Box component="img" src={SmartHomeImg} sx={style.img}></Box>
            <Typography sx={style.Info}>Full stack application</Typography>
            <Typography sx={style.workTitle}>Smart home dashboard</Typography>
          </Box>
          <Box sx={style.mobileSmartCon}>
            <Box component="img" src={OnboardImg} sx={style.img}></Box>
            <Typography sx={style.Info}>UX/UI design</Typography>
            <Typography sx={style.workTitle}>Onboard application</Typography>
          </Box>
          <Box sx={style.smartCon}>
            <Box component="img" src={BookingImg} sx={style.img}></Box>
            <Typography sx={style.Info}>Mobile application</Typography>
            <Typography sx={style.workTitle}>Booking system</Typography>
          </Box>
          <Box sx={style.mobileSmartCon}>
            <Box component="img" src={JuiceImg} sx={style.img}></Box>
            <Typography sx={style.Info}>Front End application</Typography>
            <Typography sx={style.workTitle}>Juice product homepage</Typography>
          </Box>
        </Box>
        <Box sx={style.buttonCon}>
          <Link sx={style.links} href="#">
            see more <ArrowRightAltIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
