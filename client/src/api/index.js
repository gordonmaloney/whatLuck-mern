import axios from 'axios';

const url = 'http://localhost:5001/potlucks';

export const fetchPotlucks = () => axios.get(url);
export const createPotluck = (newPotluck) => axios.post(url, newPotluck)
