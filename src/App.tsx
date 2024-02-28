import { useState } from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
	const [bgColor, setBgColor] = useState('#f0f0f0');

	const handleChange = (color: string) => {
		setBgColor(color);
	};

	return (
		<div className="app" style={{ backgroundColor: bgColor }}>
			<ColorPicker onChange={handleChange} />
		</div>
	);
};

export default App;
