// components/GoogleAnalytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-GECD8PVJ51", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
