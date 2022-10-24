import { ChangeEventHandler, useCallback, useState } from 'react';

type AllowedFieldType = string | number;

export const useField = <T extends AllowedFieldType>(defaultValue: T) => {
	const [value, setValue] = useState(defaultValue);

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
		setValue(evt.target.value as T);
	}, []);

	const reset = useCallback(() => {
		setValue(defaultValue);
	}, [defaultValue]);
	return { value, reset, onChange };
};
