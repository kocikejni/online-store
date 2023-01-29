import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import CurrencyFormatter from "../../utilities/CurrencyFormatter";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ClearIcon from '@mui/icons-material/Clear';

type SingleStoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const SingleStoreItem = ({ id, name, price, imgUrl }: SingleStoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card
      sx={{
        width: "345px",
        backgroundColor: "#d5e9dd",
        borderRadius: "10px",
        boxShadow: "10px 10px 10px #d3d9e6",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={imgUrl}
          alt="green iguana"
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ backgroundColor: "#d5e9dd" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {CurrencyFormatter(price)}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#d5e9dd" }}>
        {quantity === 0 ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ textTransform: "none" }}
            onClick={() => increaseCartQuantity(id)}
          >
            Add Item
          </Button>
        ) : (
          <Grid
            container
            item
            md={12}
            xs={12}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            
              <IconButton
                color="primary"
                onClick={() => decreaseCartQuantity(id)}
              >
                <RemoveCircleIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton
                color="primary"
                onClick={() => increaseCartQuantity(id)}
              >
                <AddCircleIcon />
              </IconButton>
              <IconButton color="error" onClick={() => removeFromCart(id)}>
                <ClearIcon />
              </IconButton>
          </Grid>
        )}
      </CardActions>
    </Card>
  );
};

export default SingleStoreItem;
