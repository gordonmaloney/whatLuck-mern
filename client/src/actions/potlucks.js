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

export const createPotluck = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPotluck(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updatePotluck = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePotluck(id, post);

    console.log("working", post)

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};