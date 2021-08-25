import { useMemo } from 'react';

export const Button = ({
	children,
	primary = false,
	onClick,
	backgroundColor = '#D1D5DB',
	color = '#1F2937',
}) => {
	const buttonStyles = useMemo(() => ({
		fontWeight: 700,
		padding: '10px 20px',
		border: 0,
		cursor: 'pointer',
		display: 'inline-block',
		lineHeight: 1,
		backgroundColor: primary ? '#2563EB' : backgroundColor,
		color: primary ? '#F3F4F6' : color,
	}), [backgroundColor, color, primary]);

	return (
		<button type="button" onClick={onClick} style={buttonStyles}>
			{children}
		</button>
	);
};
