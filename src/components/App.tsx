import { createRef, RefObject, useState } from "react";
import CalculatorForm from "./CalculatorForm";
import HeaderComponent from "./HeaderComponent";
import ResultBox from "./ResultBox";
import ResultsList from "./ResultsList";
import ShapeSelector from "./ShapeSelector";

const App = () => {
	const [activeShape, setActiveShape] = useState<number>(0);
	const [resultBoxList, setResultBoxList] = useState<JSX.Element[]>([]);

	const shapeSelectorRef: RefObject<HTMLButtonElement> = createRef();

	const onSelectedActiveIndex = (activeIndex: number) => setActiveShape(activeIndex);

	const onSkipHeaderComponent = (): void => {
		shapeSelectorRef.current?.focus();
	};

	const onSubmitCalculatorForm = (area: number) => {
		const tempResultBox: JSX.Element = <ResultBox key={resultBoxList.length} area={area} />;

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
