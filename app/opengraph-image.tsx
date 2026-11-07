import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          color: "#ededee",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, color: "#6ee7c8", letterSpacing: 4 }}>
          IDEAS  /  CODE  /  PRODUCTS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#9ba1a8", marginTop: 12 }}>{site.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
