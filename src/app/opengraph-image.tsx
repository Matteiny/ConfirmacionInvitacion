import { ImageResponse } from "next/og";
import { eventConfig } from "@/config/event";

export const alt = "Presentación de Fe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #fff7e6 0%, #ffd1a6 45%, #c97b4a 100%)",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            color: "#b91c1c",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Presentación de Fe
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "#1c1917",
            marginTop: 20,
          }}
        >
          {eventConfig.child.fullName}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#b91c1c",
            marginTop: 28,
            fontWeight: 600,
          }}
        >
          {eventConfig.date.display}
        </div>
        <div style={{ fontSize: 44, marginTop: 24, display: "flex" }}>🏁</div>
      </div>
    ),
    { ...size },
  );
}
