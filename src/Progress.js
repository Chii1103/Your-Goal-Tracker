import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  LinearProgress,
  Box,
  Grid,
} from "@mui/material";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 10) {
      setProgress(progress + 1);
    }
  };

  const handleResetClick = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 3) {
      return "#ff0000"; // 赤
    } else if (progress < 6) {
      return "#ffa500"; // オレンジ
    } else {
      return "#2ecc71"; // 緑
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", height: 445 }}>
      <CardContent  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >  {/* 全体を Flexbox にして上下を分割 */}

        <Typography variant="h5" gutterBottom  sx={{textAlign:"center", marginBottom:'35%'}}>
          Progress Tracker
        </Typography>

        <Box
          sx={{  display: "flex" ,alignItems:'center', justifyContent: 'center'}}
        >
          {/* margin:'auto 0' */}
          <LinearProgress
            variant="determinate"
            value={progress * 10} // 0-100% のスケール
            sx={{
              flexGrow: 1,
              backgroundColor: "#e0e0e0",
              height: "10px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: getColor(), // バーの色を動的に設定
              },
            }}
          />
          <Typography sx={{ marginLeft: "1em", color: getColor() }}>
            {progress} hours
          </Typography>
        </Box>

        <Grid container spacing={2}  sx={{ justifyContent: 'center', marginTop: "40%"  }} >
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              +1 hour
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleResetClick}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Progress;
