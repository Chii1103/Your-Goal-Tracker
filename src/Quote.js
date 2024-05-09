import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import { blue } from "@mui/material/colors";


const api_url = "https://api.quotable.io/random";

const Quote = () => {
  const [quoteData, setQuoteData] = useState({ content: "Loading...", author: "Loading..." });

  const fetchNewQuote = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    setQuoteData({ content: data.content, author: data.author });
  };

  useEffect(() => {
    fetchNewQuote(); // コンポーネントのマウント時に初回の引用をフェッチ
  }, []);

  return (
    <Card sx={{ maxWidth: 1000, margin:"0 auto 2rem auto", textAlign: "center" }}>
      {/* margin: "20px auto", padding: "20px", */}
      <CardContent>
        <Typography variant="h6">Quote of the Day</Typography>
        <Typography variant="body1" component="blockquote" id="quote">
          {quoteData.content}
        </Typography>
        <Typography variant="body2" color="textSecondary" id="author">
          - {quoteData.author}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={fetchNewQuote}
          >
            New Quote
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Quote;