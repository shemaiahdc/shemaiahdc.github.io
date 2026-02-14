import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function About() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - About";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>About Shopmaiah</h2>\n<p>Hi! I\u2019m Shemaiah Dela Cruz, the founder of Shopmaiah an online shop created with love for fashion and smart shopping. I\u2019m also an IT student, and through this small business, I combine my passion for style with my goal of becoming more independent and entrepreneurial.</p>\n<p>Shopmaiah offers a carefully selected mix of thrift clothes, preloved items, and brand-new pieces. Every item is chosen to be stylish, affordable, and worth your money. Whether you\u2019re looking for trendy outfits, budget-friendly finds, or unique pieces, you\u2019ll find something special here.</p>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
