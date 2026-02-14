import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Index() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Home";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>Featured Products</h2>\n<div class=\"products\">\n<div class=\"product\">\n<h3>Vintage Denim Jacket</h3>\n<p>A stylish thrift find, perfect for layering. High-quality and durable.</p>\n<p>\u20b1500</p>\n</div>\n<div class=\"product\">\n<h3>Preloved Sneakers</h3>\n<p>Comfortable and trendy sneakers in great condition. Affordable and unique.</p>\n<p>\u20b1300</p>\n</div>\n<div class=\"product\">\n<h3>New Trendy Top</h3>\n<p>Brand-new fashion piece for everyday wear. Stylish and budget-friendly.</p>\n<p>\u20b1250</p>\n</div>\n</div>\n<p><a href=\"#/login\">Login to your account</a></p>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
