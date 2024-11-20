import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ThankYouScreen = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ maxWidth: 500, width: "100%" }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            We appreciate your feedback. Redirecting to the home screen...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ThankYouScreen;
