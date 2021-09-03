export default (potlucks = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...potlucks, action.payload];
    case "UPDATE":
      return potlucks.map((potluck) =>
      potluck._id === action.payload._id ? action.payload : potluck
      );
    default:
      return potlucks;
  }
};
