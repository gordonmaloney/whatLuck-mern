export default (potlucks = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...potlucks, action.payload];
        default:
            return potlucks;
    }
}