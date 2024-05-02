export const setTokenService = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

export const getTokenService = (key: string) => {
	return localStorage.getItem(key);
};

export const removeTokenService = (key: string) => {
	localStorage.removeItem(key);
};
