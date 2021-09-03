import * as api from "../api";

// Action Creators]
export const getPotlucks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPotlucks();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPxotluck = (potluck) => async (dispatch) => {
  try {
    const { data } = await api.createPotluck(potluck);

    console.log("data", data)
    console.log("potluck", potluck)

    dispatch({ type: "CREATE", payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const createPotluck = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPotluck(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};