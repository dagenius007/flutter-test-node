import { resolveValue } from 'path-value';

export const promifyResolveValue = (obj, field) => {
	try {
		return resolveValue(obj, field);
	} catch (e) {
		return;
	}
};
