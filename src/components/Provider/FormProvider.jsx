import { FormContext } from '../../context';

export const FormProvider = ({ form, children }) => (
	<FormContext.Provider value={form}>
		{children}
	</FormContext.Provider>
);
