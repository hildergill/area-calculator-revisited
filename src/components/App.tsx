// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { createRef, RefObject, useState } from "react";
import CalculatorForm from "./calculatorform/CalculatorForm";
import HeaderComponent from "./headercomponent/HeaderComponent";
import ResultBox from "./resultbox/ResultBox";
import ResultsList from "./resultslist/ResultsList";
import ShapeSelector from "./shapeselector/ShapeSelector";

const App = () => {
	const [activeShape, setActiveShape] = useState<number>(0);
	const [resultBoxList, setResultBoxList] = useState<JSX.Element[]>([]);

	const shapeSelectorRef: RefObject<HTMLButtonElement> = createRef();

	const onSelectedActiveIndex = (activeIndex: number) => setActiveShape(activeIndex);

	const onSkipHeaderComponent = (): void => {
		shapeSelectorRef.current?.focus();
	};

	const onSubmitCalculatorForm = (area: number, shapeName: string) => {
		const tempResultBox: JSX.Element = <ResultBox key={resultBoxList.length} shapeName={shapeName} area={area} />;

		setResultBoxList([...resultBoxList, tempResultBox]);
	};

	return (
		<>
			<HeaderComponent onSkipHeaderComponent={onSkipHeaderComponent} />
			<ShapeSelector shapeSelectorRef={shapeSelectorRef} activeIndex={activeShape} onSelected={onSelectedActiveIndex} />
			<CalculatorForm activeIndex={activeShape} onSubmit={onSubmitCalculatorForm} />
			<ResultsList resultsBoxList={resultBoxList} />
		</>
	);
};

export default App;
