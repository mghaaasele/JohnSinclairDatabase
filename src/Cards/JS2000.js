import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="John Sinclair"
        height="210"
        image="https://www.john-sinclair.de/site/thumbnails/225/0/1/4/4/44f7b67bfb/3a66bc0b8a4fdda8.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          John Sinclair Edition 2000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* HORROR-HÖRGENUSS IN SERIE: JOHN SINCLAIR Auch bekannt als Edition 2000 */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Übersicht</Button>
        <Button size="small">Zufällige</Button>
      </CardActions>
    </Card>
  );
}
