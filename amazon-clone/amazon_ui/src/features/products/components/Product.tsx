import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { ProductDocument } from "../models/Product";
import { decrementProduct, incrementProduct } from "../productSlice";

interface ProductProps {
  product: ProductDocument;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { cart } = useAppSelector((state) => state.product);
  let qty = 0;
  const cartItem = cart.find((item) => item._id === product._id);

  if (cartItem) {
    qty = cartItem.quantity;
  }
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ width: 300, minWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300.png/09f/fff"
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          $ {product.price}
        </Typography>
        {product.description && <Typography>{product.description}</Typography>}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            dispatch(decrementProduct(product));
          }}
          disabled={qty === 0}
          size="large"
        >
          -
        </Button>
        <span>{qty}</span>
        <Button
          onClick={() => {
            dispatch(incrementProduct(product));
          }}
          disabled={qty === 0}
          size="large"
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
