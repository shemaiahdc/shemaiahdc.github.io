import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Profile() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Profile";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>User Profile</h2>\n<div class=\"profile-info\">\n<p><strong>First Name:</strong> shem</p>\n<p><strong>Last Name:</strong> dc</p>\n<p><strong>Email:</strong> shem.dc@example.com</p>\n<p><strong>Mobile Number:</strong> +63 919 945 6789</p>\n<p><strong>Home Address:</strong> 123 Sampaloc Street, Manila, Philippines</p>\n</div>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
