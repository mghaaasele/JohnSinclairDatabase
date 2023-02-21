import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NavBar from "./NavBar";
import Table from "./Table";
import JS2000 from "./Cards/JS2000";
import JSClassics from "./Cards/JSClassics";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NavBar />

    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <JS2000 />
        </Grid>
        <Grid item xs={4}>
          <JSClassics />
        </Grid>
      </Grid>
    </Box>
    <Table />
  </StrictMode>
);
