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
        alt="John Sinclair Classics"
        height="210"
        image="https://www.john-sinclair.de/site/thumbnails/736/0/1/f/3/f30edb69da/6843bf2cb4329165.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          John Sinclair Classics
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Die mit dem Zusatz Classics erscheinenden Folgen verkörpern die unter dem Titel
          Gespensterkrimis erschienen sind. */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Übersicht</Button>
        <Button size="small">Zufällige</Button>
      </CardActions>
    </Card>
  );
}
