import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f4f1e8",
          color: "#172019",
          fontFamily: "monospace",
          padding: "52px",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#4b5563",
          }}
        >
          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <div
              style={{
                fontWeight: "700",
                color: "#047857",
                fontSize: "28px",
              }}
            >
              RK
            </div>

            <div>Developer OS v1.0</div>
          </div>

          <div>CODE • CREATE • LEARN</div>
        </div>

        {/* MAIN WINDOW */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "1000px",
              height: "410px",
              background: "#ffffff",
              border: "2px solid #d6d3c9",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
            }}
          >
            {/* WINDOW HEADER */}
            <div
              style={{
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
                borderBottom: "2px solid #e7e5df",
                background: "#fafaf7",
                fontSize: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#febc2e",
                  }}
                />
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#28c840",
                  }}
                />

                <div style={{ marginLeft: "15px", color: "#52525b" }}>
                  portfolio.exe
                </div>
              </div>

              <div style={{ color: "#9ca3af" }}>/ramkirstensantos</div>
            </div>

            {/* WINDOW CONTENT */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "48px 60px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: "#047857",
                  marginBottom: "14px",
                }}
              >
                Hello, I&apos;m
              </div>

              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "62px",
                  lineHeight: 1,
                  fontWeight: "700",
                  letterSpacing: "-2px",
                }}
              >
                &gt; Ram Kirsten Santos
              </div>

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "24px",
                  color: "#52525b",
                }}
              >
                Web Developer • Software Developer • Front-End Developer
              </div>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "20px",
                  color: "#047857",
                }}
              >
                <span>●</span>
                <span>ramkirstensantos.vercel.app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}