import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f1e8",
          color: "#047857",
          fontSize: "28px",
          fontWeight: "700",
          fontFamily: "Arial, sans-serif",
          borderRadius: "12px",
        }}
      >
        RK
      </div>
    ),
    {
      ...size,
    }
  );
}