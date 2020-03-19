import * as yup from 'yup';

export default yup.object().shape({
	name: yup.string().required(),
	age: yup
		.number()
		.required()
		.positive()
		.integer(),
	email: yup.string().email(),
});