import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton"; // Import IconButton for better button styling
import AddIcon from "@mui/icons-material/Add"; // Import Add icon
import RemoveIcon from "@mui/icons-material/Remove"; // Import Remove icon
import { useBadge } from "../providers/badgeContext";
import Snackbar from "@mui/material/Snackbar";

export const ProductCard = ({
  productId,
  image,
  title,
  description,
  price,
}) => {
  const [quantity, setQuantity] = useState(0); // Initialize quantity state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { addToCart } = useBadge();

  // Function to increment quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrement quantity
  const handleDecrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity - 1 < 0 ? 0 : prevQuantity - 1
    ); // Prevents quantity from going below 0
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: productId,
      name: title,
      quantity: quantity,
      price: price,
    };
    addToCart(productToAdd);
    // Reset quantity and show Snackbar
    setQuantity(0);
    setSnackbarMessage(`${title} - dodano do koszyka w ilości: ${quantity}`);
    setSnackbarOpen(true);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
      <CardMedia component="img" height="340" image={image} alt={title} />
      <CardContent>
        <Typography
          className="cardTitle"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          className="cardDescription"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography className="cardPrice" variant="body1" color="text.primary">
          {price} zł
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <IconButton
          className="cardDecrementButton"
          onClick={handleDecrement}
          size="small"
          disabled={quantity === 0}
        >
          <RemoveIcon />
        </IconButton>
        <Typography className="cardQuantity">{quantity}</Typography>
        <IconButton
          className="cardIncrementButton"
          onClick={handleIncrement}
          size="small"
        >
          <AddIcon />
        </IconButton>
      </CardActions>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          className="cardAddButton"
          size="small"
          onClick={handleAddToCart}
          disabled={quantity === 0}
        >
          Dodaj do koszyka
        </Button>
      </CardActions>
      <Snackbar
        className="infoSnackbar"
        open={snackbarOpen}
        autoHideDuration={2000} // Automatically hide after 2 seconds
        onClose={() => setSnackbarOpen(false)} // Close handler
        message={snackbarMessage} // Snackbar message
      />
    </Card>
  );
};
