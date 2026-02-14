import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Login() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Login";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>Login</h2>\n<form action=\"#\" method=\"post\">\n<label for=\"email\">Email:</label>\n<input id=\"email\" name=\"email\" required=\"\" type=\"email\"/>\n<label for=\"password\">Password:</label>\n<input id=\"password\" name=\"password\" required=\"\" type=\"password\"/>\n<button type=\"submit\">Login</button>\n</form>\n<p>Don't have an account? <a href=\"#/signup\">Sign up here</a></p>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
