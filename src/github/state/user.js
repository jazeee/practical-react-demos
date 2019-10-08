const SET_USER = "github/user/SET_USER";

const initialState = {
	user: {
		name: "?",
	},
};

export const userState = (state = initialState, action) => {
	// returns a new state.
	switch(action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

const resetState = () => {
	return {
		type: SET_USER,
		initialState,
	};
};

const setUser = (user) => {
	return {
		type: SET_USER,
		user,
	};
};

export const actions = {
	setUser,
	resetState,
};
