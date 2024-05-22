import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useBadge } from "../providers/badgeContext";
import "./navbar.css";

export const Navbar = () => {
  const { badgeCount } = useBadge();

  return (
    <div className="navbar">
      <div className="logoLink">
        <Link to="/">
          <img src="/tabLogo.png?url" alt="JamniShop Logo" />
          <h1 className="logoTitle">JamniShop</h1>
          <img src="/tabLogo2.png?url" alt="JamniShop Logo 2" />
          {/* <img src="/tabLogo3.png?url" alt="JamniShop Logo 2" /> */}
        </Link>
      </div>
      <div className="cartLink">
        <Link to="/cart">
          <Badge
            className="cartBadge"
            badgeContent={badgeCount}
            color="secondary"
            // color="primary"
          >
            <Button className="cartButton" variant="text" color="inherit">
              <ShoppingCartIcon style={{ fontSize: 38 }} />
            </Button>
          </Badge>
        </Link>
      </div>
    </div>
  );
};
