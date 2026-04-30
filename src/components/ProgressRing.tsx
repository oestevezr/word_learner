interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
}

export default function ProgressRing({
  value,
  size = 80,
  strokeWidth = 7,
  color = '#6366F1'
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(Math.max(value, 0), 100) / 100) * circumference

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ transform: 'rotate(90deg)', transformOrigin: '50% 50%', fill: '#0d0d0d', fontSize: size * 0.22, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}
      >
        {Math.round(value)}%
      </text>
    </svg>
  )
}
