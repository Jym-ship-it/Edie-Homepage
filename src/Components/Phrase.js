import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonFour from "../Assets/Images/person4.png";

export default function Phrase() {
  const style = {
    mainCon: {
      margin: "0px 95px",
      marginTop: "196px",
    },
    phrase: {
      fontFamily: "Poppins",
      fontSize: "36px",
      fontWeight: "500",
      width: "937px",
    },
    Person: {
      marginTop: "36px",
      display: "flex",
    },
    personImg: {
      width: "75px",
      height: "75px",
      borderRadius: "12px",
      marginRight: "51px",
    },
    PersonName: {
      fontFamily: "Poppins",
      fontSize: "24px",
      fontWeight: "500",
      color: "#333333",
    },
    subInfo: {
      marginTop: "12px",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: "500",
      color: "#828282",
    },
  };
  return (
    <Box sx={style.mainCon}>
      <Box>
        <Typography sx={style.phrase}>
          “Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team.”
        </Typography>
      </Box>
      <Box sx={style.Person}>
        <Box>
          <Box component="img" src={PersonFour} sx={style.personImg}></Box>
        </Box>
        <Box>
          <Typography sx={style.PersonName}>Carlos Tran</Typography>
          <Typography sx={style.subInfo}>The Decorate Gatsby</Typography>
        </Box>
      </Box>
    </Box>
  );
}
