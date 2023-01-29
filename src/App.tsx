import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import {  Grid } from "@mui/material";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <Grid>
        <Navbar />
        <Grid container item md={12} xs={12} justifyContent={"center"}>
          <Grid container item maxWidth={"md"} padding={3}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Grid>
        </Grid>
      </Grid>
    </ShoppingCartProvider>
  );
}

export default App;
