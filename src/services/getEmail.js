const getEmail = () => JSON.parse(localStorage.getItem('email')).email;

export default getEmail;
