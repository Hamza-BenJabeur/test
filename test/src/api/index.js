import axios from 'axios';

const url = 'http://localhost:5001/registration';


export const Registration = (reg) => axios.post(url, reg);
