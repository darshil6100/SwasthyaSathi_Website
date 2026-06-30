interface PulseLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  animated?: boolean;
}

/**
 * Signature motif: a heartbeat / ECG trace. Used at multiple sizes:
 * - Hero: large, very faint, behind headline
 * - Dividers: thin, full-width, semi-transparent
 * - CTA section: decorative top edge
 */
export default function PulseLine({
  className = "",
  color = "currentColor",
  strokeWidth = 2,
  animated = false,
}: PulseLineProps) {
  return (
    <svg
      viewBox="0 0 480 60"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 30 H90 L110 30 L126 30 L138 8 L156 52 L170 30 L182 30 L196 18 L204 30 H240 L260 30 L272 30 L284 8 L302 52 L316 30 L328 30 L340 18 L348 30 H480"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animated
            ? {
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: "draw-pulse 2s ease forwards",
              }
            : undefined
        }
      />
    </svg>
  );
}
