import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import "./Header.css";
import {useStateValue} from "./StateProvider";
import { SportsBasketball } from "@mui/icons-material";

function Header() {
    // update cart count with # of items
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="header">
            {/* amazon logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header_logo">
                    <EmojiNatureIcon className="header_logo_image" fontSize="large"></EmojiNatureIcon>
                    <h2 className="header_logo_title">Buggy Boutique</h2>
                </div>
            </Link>
            {/* search bar */}
            <div className="header_search">
                <input type="text" className="header_search_input" />
                <SearchIcon className="search_icon"></SearchIcon>
            </div>
            {/* navigation bar */}
            <div className="header_nav_bar">
                <div className="nav_item">
                    <span className="nav_item_one">Hello, Bug</span>
                    <span className="nav_item_two">Sign In ▾</span>
                </div>
                <div className="nav_item">
                    <span className="nav_item_one">Returns</span>
                    <span className="nav_item_two">& Orders</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav_item">
                        <span className="nav_item_two cart_count">{cart.length}</span>
                        <AddShoppingCartIcon className="cart"></AddShoppingCartIcon>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header