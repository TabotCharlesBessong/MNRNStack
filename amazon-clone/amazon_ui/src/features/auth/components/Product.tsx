import { FC, useState } from "react";
import { ProductDocument } from "../../products/models/Product";
import { useAppDispatch } from "../../../hooks/redux/hooks";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { decrementProduct, incrementProduct } from "../../products/productSlice";

interface ProductProps {
  product: ProductDocument;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [count, setCount] = useState(0);
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
          $ {product.price}
        </Typography>
        {product.description && <Typography>{product.description}</Typography>}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            setCount((prevCount: number) => {
              if (prevCount === 0) return 0;
              return prevCount - 1;
            });
            dispatch(decrementProduct(product));
          }}
          disabled={count === 0}
          size="large"
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          onClick={() => {
            setCount((prevCount: number) => {
              if (prevCount === 0) return 0;
              return prevCount - 1;
            });
            dispatch(incrementProduct(product));
          }}
          disabled={count === 0}
          size="large"
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
