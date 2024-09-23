const testEmail = (email) => {
	const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/g;
	return emailPattern.test(email);
};

export default { testEmail };
