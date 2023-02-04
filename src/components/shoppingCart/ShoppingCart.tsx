import { Grid, List, Typography } from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ShoppingCartSingleItem } from "./ShoppingCartSingleItem";
import CurrencyFormatter from "../../utilities/CurrencyFormatter";
import storeItems from "../../data/items.json";

export function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  return (
    <List>
      {cartItems.map((cartItem) => (
        <ShoppingCartSingleItem key={cartItem.id} {...cartItem} />
      ))}
      <Grid container item md={12} xs={12} justifyContent={'right'} alignItems={'center'} padding={1}>
        <Typography>Total{" "}
            {CurrencyFormatter(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}</Typography>
      </Grid>
    </List>
  );
}
