import { FC, FormEvent } from "react";
import { Shapes } from "../../shapes";
import { IconCheck, IconX } from "@tabler/icons";
import CalculatorFormStyles from "./calculatorform.module.css";
import CommonStyles from "../../common.module.css";

export type CalculatorFormProps = {
	activeShape: number;
};

export const CalculatorForm: FC<CalculatorFormProps> = (props: CalculatorFormProps) => {
	const { activeShape }: CalculatorFormProps = props;

	const { getName } = Object.values(Shapes)[activeShape];

	return (
		<main className={CalculatorFormStyles.calculatorForm}>
			<h2>{getName()}</h2>

			<form onSubmit={(event: FormEvent) => event.preventDefault()}>
				{/* TODO Add something here later */}
				{/* TODO Add something here later */}
				{/* TODO Add something here later */}

				<div className={CalculatorFormStyles.controlButtonContainer}>
					<button type="reset" className={CommonStyles.commonButton}>
						<p>Reset</p>
						<IconX />
					</button>

					<button type="submit" className={CommonStyles.commonButton}>
						<p>Submit</p>
						<IconCheck />
					</button>
				</div>
			</form>
		</main>
	);
};
