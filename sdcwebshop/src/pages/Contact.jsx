import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Contact() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Contact Us";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>Contact Us</h2>\n<form action=\"#\" method=\"post\">\n<label for=\"name\">Name:</label>\n<input id=\"name\" name=\"name\" required=\"\" type=\"text\"/>\n<label for=\"message\">Message:</label>\n<textarea id=\"message\" name=\"message\" required=\"\" rows=\"5\"></textarea>\n<button type=\"submit\">Submit</button>\n</form>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
