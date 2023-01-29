import React from "react";
import storeItems from "../data/items.json";
import SingleStoreItem from "../components/storeItem/SingleStoreItem";
import { Grid } from "@mui/material";

const Store = () => {
  return (
    <Grid container item md={12} sm={12} xs={12} spacing={5}>
      {storeItems.map((item, index) => (
        <Grid container item md={4} sm={6} xs={12} justifyContent={'center'} key={index}>
          <SingleStoreItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Store;
