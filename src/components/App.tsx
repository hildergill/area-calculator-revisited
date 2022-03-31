import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import ShapeSelector from "./ShapeSelector";

const App = () => {
	const [activeShape, setActiveShape] = useState(0);

	const onSelectedActiveIndex = (activeIndex: number) => setActiveShape(activeIndex);

	return (
		<>
			<HeaderComponent />
			<ShapeSelector activeIndex={activeShape} onSelected={onSelectedActiveIndex} />

			{/** @TODO Add something here later */}
			{/** @TODO Add something here later */}
			{/** @TODO Add something here later */}
		</>
	);
};

export default App;
