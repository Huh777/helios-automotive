export default function HeliosLogo({ dark = false }) {
  const textColor = dark ? "#1a1a1a" : "#ffffff";
  const taglineColor = dark ? "#888" : "rgba(255,255,255,0.7)";
  return (
    <svg width="210" height="52" viewBox="0 0 210 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2, 2)">
        <path
          d="M60 18 C68 18 74 14 82 12 C90 10 102 9 114 9 C124 9 134 11 140 14 C146 17 150 18 154 18"
          stroke={dark ? "#999" : "rgba(255,255,255,0.6)"}
          strokeWidth="1.2" fill="none" strokeLinecap="round"
        />
        <path
          d="M55 22 C57 20 62 18 70 17 C78 16 86 14 96 13 C106 12 118 12 126 13 C134 14 140 16 146 18 C150 19 154 20 157 22"
          stroke={dark ? "#999" : "rgba(255,255,255,0.55)"}
          strokeWidth="0.9" fill="none" strokeLinecap="round"
        />
      </g>
      <text x="0" y="36" fontFamily="'Georgia', serif" fontWeight="700" fontSize="26" fill="#8B1A2E" letterSpacing="-0.3">
        Helios
      </text>
      <text x="78" y="36" fontFamily="'Georgia', serif" fontWeight="400" fontSize="26" fill={textColor} letterSpacing="-0.3">
        Automotive
      </text>
      <text x="2" y="50" fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic" fontSize="10" fill={taglineColor} letterSpacing="0.3">
        ... The Passionate Pursuit of Perfection
      </text>
    </svg>
  );
}
