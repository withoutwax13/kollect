import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Adaptability",
    description:
      "Kollect offers a versatile platform that caters to all levels of collectors, adapting to your evolving needs and collecting journey.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Durability",
    description:
      "With Kollect, enjoy a robust trading experience built for stability and reliability, providing peace of mind as you trade with confidence.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "User-Friendly Design",
    description:
      "Navigate Kollect effortlessly with streamlined interfaces and intuitive features, making trading and community interaction easy and enjoyable.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Innovation",
    description:
      "Kollect pioneers cutting-edge trading features and community engagement tools, constantly pushing boundaries to bring you the latest advancements in K-pop trading technology.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Precision in Every Detail",
    description:
      "From listing cards to processing transactions, Kollect ensures meticulous attention to detail for a seamless trading experience, allowing you to focus on building your collection and connecting with fellow fans.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Community Engagement",
    description:
      "Immerse yourself in Kollect's vibrant community of K-pop enthusiasts. Share your passion, connect with like-minded collectors worldwide, and celebrate the love for K-pop together.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Kollect offers a robust and adaptable trading platform with
            user-friendly design, innovative features, and reliable support.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
