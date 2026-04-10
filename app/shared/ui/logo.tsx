type LogoProps = {
	size?: number;
	primaryColor?: string;
	secondaryColor?: string;
	tertiaryColor?: string;
};

export default function Logo({
	size = 100,
	primaryColor = "var(--color-primary-400)", // Indigo
	secondaryColor = "var(--color-primary-500)", // Lighter indigo
	tertiaryColor = "var(--color-primary-600)", // Even lighter indigo
}: LogoProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="-25 -16 96 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			{/* Back paper */}
			<rect
				x="16"
				y="6"
				width="36"
				height="48"
				rx="4"
				fill={tertiaryColor}
				transform="rotate(-6 16 6)"
			/>
			{/* Middle paper */}
			<rect
				x="8"
				y="14"
				width="36"
				height="48"
				rx="4"
				fill={secondaryColor}
				transform="rotate(4 8 14)"
			/>
			{/* Front paper */}
			<rect
				x="0"
				y="22"
				width="36"
				height="48"
				rx="4"
				fill={primaryColor}
				transform="rotate(30 2.5 22.5)"
			/>
		</svg>
	);
}
