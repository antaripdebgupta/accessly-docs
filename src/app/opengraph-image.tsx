import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, DEFAULT_DESCRIPTION } from "@/data/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#111113",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%)",
        backgroundSize: "40px 40px",
        color: "#f7f7f8",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f7f7f8",
          }}
        >
          {SITE_NAME}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: 0,
          }}
        >
          {SITE_TAGLINE}
        </h1>
        <p
          style={{
            fontSize: "26px",
            lineHeight: 1.4,
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "960px",
          }}
        >
          {DEFAULT_DESCRIPTION}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #2e2e33",
          paddingTop: "28px",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <span
            style={{
              borderRadius: "9999px",
              border: "1px solid #3f3f46",
              padding: "6px 16px",
              fontSize: "16px",
              color: "#e4e4e7",
              backgroundColor: "#19191b",
            }}
          >
            WCAG 2.2 AA
          </span>
          <span
            style={{
              borderRadius: "9999px",
              border: "1px solid #3f3f46",
              padding: "6px 16px",
              fontSize: "16px",
              color: "#e4e4e7",
              backgroundColor: "#19191b",
            }}
          >
            WAI-ARIA APG
          </span>
          <span
            style={{
              borderRadius: "9999px",
              border: "1px solid #3f3f46",
              padding: "6px 16px",
              fontSize: "16px",
              color: "#e4e4e7",
              backgroundColor: "#19191b",
            }}
          >
            Tailwind CSS
          </span>
        </div>
        <span
          style={{
            fontSize: "18px",
            fontFamily: "monospace",
            color: "#71717a",
          }}
        >
          @accessly-ui/react
        </span>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
