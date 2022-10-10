import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <Typography variant="h5" color="#8b4fba" gutterBottom>
      {props.children}
    </Typography>
  );
}
