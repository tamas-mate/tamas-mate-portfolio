import { INPUTLIMITS } from "@/utils/utils";

import type { FieldErrorMessageProps } from "@/types";

const FieldErrorMessage = ({ id, field, error, t }: FieldErrorMessageProps) => {
	if (!error?.message) return null;

	const num =
		error.type === "maxLength"
			? INPUTLIMITS[field].max
			: error.type === "minLength"
				? (INPUTLIMITS[field] as { min: number }).min
				: undefined;

	return (
		<span id={id} role="alert" className="text-xs text-red-500">
			{t(error.message as string, num ? { value: num } : undefined)}
		</span>
	);
};

export default FieldErrorMessage;
