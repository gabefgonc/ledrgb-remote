import { ToastAndroid, Image, Text } from 'react-native';
import { ColorButton } from '../ColorButton/ColorButton';
import { GridRow } from './GridRow';
import { Container } from './styles';

export const ButtonGrid = () => {
	const onClick = () => {
		ToastAndroid.show('amo novinhas e a larih pq ela é velha :((', ToastAndroid.BOTTOM);
	};

	return (
		<Container>
			<GridRow>
				<ColorButton onPress={onClick} color="#d1d1d1">
					<Image
						source={require('../../../assets/lampada_cima.png')}
						style={{ height: 64, width: 64 }}
					/>
				</ColorButton>
				<ColorButton onPress={onClick} color="#d1d1d1">
					<Image
						source={require('../../../assets/lampada_baixo.png')}
						style={{ height: 64, width: 64 }}
					/>
				</ColorButton>
				<ColorButton onPress={onClick} color="#2e2e2e">
					<Text style={{ fontWeight: 'bold', color: '#a297a7', fontSize: 18 }}>ON</Text>
				</ColorButton>
				<ColorButton onPress={onClick} color="#2e2e2e">
					<Text style={{ fontWeight: 'bold', color: '#a297a7', fontSize: 18 }}>OFF</Text>
				</ColorButton>
			</GridRow>
			<GridRow>
				<ColorButton onPress={onClick} color="#D70606" />
				<ColorButton onPress={onClick} color="#064B0D" />
				<ColorButton onPress={onClick} color="#0066FF" />
				<ColorButton onPress={onClick} color="#D1D1D1">
					<Text style={{ fontWeight: 'bold', color: '#010101', fontSize: 22 }}>W</Text>
				</ColorButton>
			</GridRow>
			<GridRow>
				<ColorButton onPress={onClick} color="#CB3100" />
				<ColorButton onPress={onClick} color="#116A1A" />
				<ColorButton onPress={onClick} color="#1119C8" />
				<ColorButton onPress={onClick} color="#d1d1d1">
					<Text style={{ fontWeight: 'bold', color: '#010101', fontSize: 14 }}>FLASH</Text>
				</ColorButton>
			</GridRow>
			<GridRow>
				<ColorButton onPress={onClick} color="#D95F1A" />
				<ColorButton onPress={onClick} color="#45D6A2 " />
				<ColorButton onPress={onClick} color="#3A06A8" />
				<ColorButton onPress={onClick} color="#D1D1D1">
					<Text style={{ fontWeight: 'bold', color: '#010101', fontSize: 14 }}>STROBE</Text>
				</ColorButton>
			</GridRow>
			<GridRow>
				<ColorButton onPress={onClick} color="#DB803F" />
				<ColorButton onPress={onClick} color="#3D8E89" />
				<ColorButton onPress={onClick} color="#6716A7" />
				<ColorButton onPress={onClick} color="#D1d1d1">
					<Text style={{ fontWeight: 'bold', color: '#010101', fontSize: 14 }}>FADE</Text>
				</ColorButton>
			</GridRow>
			<GridRow>
				<ColorButton onPress={onClick} color="#FFD74B" />
				<ColorButton onPress={onClick} color="#05445F" />
				<ColorButton onPress={onClick} color="#A72FF0" />
				<ColorButton onPress={onClick} color="#D1D1D1">
					<Text style={{ fontWeight: 'bold', color: '#010101', fontSize: 12 }}>SMOOTH</Text>
				</ColorButton>
			</GridRow>
		</Container>
	);
};
