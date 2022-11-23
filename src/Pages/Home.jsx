import { ShoppingCartSharp } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/cart-slice";
import { fetchAllProducts } from "../feature/products-slice";

export default function Home() {
  const theme = useTheme();
  const products =useSelector(state =>state.products)
  const dispatch= useDispatch();

 if(!products?.value.length){
   dispatch(fetchAllProducts());
 }

  function addProductToCart(product){
      dispatch(addToCart({product,quantity:1}));
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt:theme.spacing()
                }}
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  display:"-webkit-box",
                  "-webkit-line-clamp":"1",
                  "-webkit-box-orient":"vertical",
                  }}>
                  {title}
                </Typography>
                <Typography 
                color="text.secondary"
                  paragraph
                  sx={{
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  display:"-webkit-box",
                  "-webkit-line-clamp":"2",
                  "-webkit-box-orient":"vertical",
                  }}>{description}</Typography>
                <Typography fontSize="large" paragraph>{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{
                alignSelf:"center"
              }}>
                <Button variant="contained" onClick={()=>addProductToCart(title, id, price, description, rating, image )}>
                 <ShoppingCartSharp/>
                 Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
