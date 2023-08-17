import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    currentUser: { email },
    token,
  } = useSelector((state) => state.authSlice);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
      }}
      component="header"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: 36, color: "secondary.main", fontWeight: "bold" }}
        >
          PhoneBook
        </Typography>
      </Link>
      {token && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle sx={{ color: "secondary.main" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>{email}</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </Box>
  );
};

export default Header;
