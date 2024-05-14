import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const CartItem = ({ item, onIncrement, onDecrement, onDelete }) => {
  return (
    <ListItem className={`cartItem-${item.id}`}>
      <ListItemText
        className="itemInfoContainer"
        primary={item.name}
        secondary={`Ilość: ${item.quantity}`}
      />
      <Button
        className="itemDecrementButton"
        onClick={() => onDecrement(item.id)}
        disabled={item.quantity === 0}
      >
        -
      </Button>
      <Button
        className="itemIncrementButton"
        onClick={() => onIncrement(item.id)}
      >
        +
      </Button>
      <Button className="itemDeleteButton" onClick={() => onDelete(item.id)}>
        Usuń
      </Button>
    </ListItem>
  );
};

export default CartItem;
