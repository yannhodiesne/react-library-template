import { useCallback, useMemo, useRef } from 'react';

export const useForm = (defaultValues) => {
	const inputs = useRef({});

	const register = useCallback((name, getter) => {
		inputs.current[name] = getter;
	}, []);

	const unregister = useCallback((name) => {
		delete inputs.current[name];
	}, []);

	const context = useMemo(() => ({
		defaultValues,
		register,
		unregister,
	}), [defaultValues, register, unregister]);

	return {
		form: context,
	};
};
