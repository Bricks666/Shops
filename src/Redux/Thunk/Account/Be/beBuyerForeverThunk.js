export const beBuyerForever = () => {
	return async (dispatch, getState) => {
		try {
			const state = getState();
			await state.contract.methods
				.RequestToShoperFunc()
				.send({ from: state.user.address })
				.on("receipt", (response) => console.log(response));
		} catch (e) {
			console.log(e.message);
		}
	};
};
