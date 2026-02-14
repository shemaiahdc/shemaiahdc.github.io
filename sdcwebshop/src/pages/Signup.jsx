import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Signup() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Transaction Confirmation";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>Transaction Confirmation</h2>\n<div class=\"receipt\">\n<h3>E-Receipt</h3>\n<p><strong>Order ID:</strong> #123456</p>\n<p><strong>Items:</strong> Vintage Denim Jacket (\u20b1500), Preloved Sneakers (\u20b1300)</p>\n<p><strong>Total:</strong> \u20b1800</p>\n<p><strong>Payment Method:</strong> Credit Card</p>\n<p><strong>Delivery Option:</strong> Standard (\u20b150, 5-7 days)</p>\n<p><strong>Delivery Address:</strong> 123 Sampaloc Street, Manila, Philippines</p>\n<p>Thank you for shopping with Shopmaiah!</p>\n</div>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
