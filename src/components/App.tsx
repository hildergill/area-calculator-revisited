import { createRef, RefObject, useState } from "react";
import CalculatorForm from "./CalculatorForm";
import HeaderComponent from "./HeaderComponent";
import ShapeSelector from "./ShapeSelector";

const App = () => {
	const [activeShape, setActiveShape] = useState(0);

	const shapeSelectorRef: RefObject<HTMLButtonElement> = createRef();

	const onSelectedActiveIndex = (activeIndex: number) => setActiveShape(activeIndex);

	const onSkipHeaderComponent = (): void => {
		shapeSelectorRef.current?.focus();
	};

	const onSubmitCalculatorForm = (inputs: any) => {
		// TODO Add something here later
	};

	return (
		<>
			<HeaderComponent onSkipHeaderComponent={onSkipHeaderComponent} />
			<ShapeSelector shapeSelectorRef={shapeSelectorRef} activeIndex={activeShape} onSelected={onSelectedActiveIndex} />
			<CalculatorForm activeIndex={activeShape} onSubmit={onSubmitCalculatorForm} />

			{/** @TODO Add something here later */}
			{/** @TODO Add something here later */}
			{/** @TODO Add something here later */}
		</>
	);
};

export default App;
