const colors = ['#000', '#fff', '#780', '#3489', '#800'];

interface IcolorPicker {
	onChange: (color: string) => void;
}
const ColorPicker = ({ onChange }: IcolorPicker) => {
	const handleBgChange = (color: string) => {
		onChange(color);
	};

	return (
		<div className="colorPicker">
			{colors.map((color, index) => (
				<button
					onClick={() => handleBgChange(color)}
					key={index}
					style={{ backgroundColor: color }}
					className="colorPicker-btn"></button>
			))}
		</div>
	);
};

export default ColorPicker;
