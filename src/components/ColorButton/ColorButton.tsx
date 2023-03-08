import React from 'react';
import { Button } from './styles';

interface Props {
	color: string;
	onPress: (e: any) => void;
	children?: React.ReactNode;
}

export const ColorButton: React.FC<Props> = ({ color, children, onPress }) => {
	return (
		<Button activeOpacity={0.7} onPress={onPress} color={color}>
			{children}
		</Button>
	);
};
