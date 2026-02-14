import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Catalog() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Product Catalog";
    if (window.ShopModule?.displayProducts) window.ShopModule.displayProducts();
  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<div class=\"main-container\">\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n<li><a href=\"#/profile\">Profile</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>\u2728 Product Catalog</h2>\n<p>Discover my collection of stylish thrift finds and preloved items from my closet!</p>\n<div class=\"products\" id=\"product-list\">\n<!-- Products loaded dynamically via JS -->\n</div>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n</div>\n\n" }} />
  );
}
