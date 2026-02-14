import { useEffect } from "react";

let loaded = false;
let loadingPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => {
      s.setAttribute("data-loaded", "true");
      resolve();
    };
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export function useShopModule() {
  useEffect(() => {
    if (loaded) return;

    if (!loadingPromise) {
      const base = import.meta.env.BASE_URL || "/";
      const src = `${base.replace(/\/$/, "")}/script.js`;
      loadingPromise = loadScript(src)
        .then(() => {
          loaded = true;
        })
        .catch((e) => {
          console.error("Failed to load legacy script.js", e);
        });
    }
  }, []);
}
