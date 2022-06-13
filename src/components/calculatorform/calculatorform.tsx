import { FC, FormEvent } from "react";
import { Shapes } from "../../shapes";
import { IconCheck, IconX } from "@tabler/icons";

export type CalculatorFormProps = {
	activeShape: number;
};

export const CalculatorForm: FC<CalculatorFormProps> = (props: CalculatorFormProps) => {
	const { activeShape }: CalculatorFormProps = props;

	const { getName } = Object.values(Shapes)[activeShape];

	return (
		<main>
			<h2>{getName()}</h2>

			<form onSubmit={(event: FormEvent) => event.preventDefault()}>
				{/* TODO Add something here later */}
				{/* TODO Add something here later */}
				{/* TODO Add something here later */}

				<button type="reset">
					<p>Reset</p>
					<IconX />
				</button>

				<button type="submit">
					<p>Submit</p>
					<IconCheck />
				</button>
			</form>
		</main>
	);
};
