import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import GavelIcon from '@mui/icons-material/Gavel';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 300,
  }
});

export default function Photocard({ card }) {
  const {
    name,
    marketPrice,
    assets,
    tags,
    specialAttributes,
    userAssignedCurrency,
    cardId,
  } = card;

  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="photocard">
            JP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name
          .split("")
          .filter((char, index) => index < 30)
          .join("")}
        subheader={`${userAssignedCurrency.toUpperCase()} ${marketPrice}`}
      />
      <CardMedia
        className={classes.root}
        component="img"
        height="300"
        image={assets[0].url}
        alt={name}
      />
      <CardContent>
        <Stack className="chip-stack" direction="row" spacing={1}>
          {tags.map((tag) => (
            <Chip label={tag.toUpperCase()} />
          ))}
        </Stack>
        <br />
        <Stack className="chip-stack" direction="row" spacing={1}>
          {specialAttributes.map((specialAttribute) => (
            <Chip label={specialAttribute.toUpperCase()} />
          ))}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="bid" href={`/card/${cardId}`}>
          <GavelIcon />
        </IconButton>
        <IconButton aria-label="share">
          <div onClick={() => navigator.clipboard.writeText(cardId)}>
            <ContentCopyIcon />
          </div>
        </IconButton>
      </CardActions>
    </Card>
  );
}
