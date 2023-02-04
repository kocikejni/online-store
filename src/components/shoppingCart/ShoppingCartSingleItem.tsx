import {
  Grid,
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import { Fragment } from "react";
import CurrencyFormatter from "../../utilities/CurrencyFormatter";
import CloseIcon from "@mui/icons-material/Close";

type ShoppingCartSingleItemProps = {
  id: number;
  quantity: number;
};

export function ShoppingCartSingleItem({
  id,
  quantity,
}: ShoppingCartSingleItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id)!;
  if (item === null) return null;

  return (
    // <Grid
    //   container
    //   item
    //   md={12}
    //   xs={12}
    //   direction="row"
    //   justifyContent="space-between"
    //   alignItems="center"
    // >
    //     <Grid container item md={2} xs={2}><img src={item?.imgUrl} style={{ objectFit: "cover", height:'200px' }} /></Grid>
    //     <Grid container item md={8} xs={8}><Typography></Typography></Grid>
    // </Grid>
    <ListItem alignItems="flex-start" sx={{ width: "300px" }}>
      <ListItemAvatar>
        <Avatar src={item?.imgUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography>
            {item?.name} <span>{quantity}x</span>
          </Typography>
        }
        secondary={
          <Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {CurrencyFormatter(item.price * quantity)}
            </Typography>
            <IconButton onClick={() => removeFromCart(item.id)}>
              <CloseIcon color="error" />
            </IconButton>
          </Fragment>
        }
      />
    </ListItem>
  );
}
