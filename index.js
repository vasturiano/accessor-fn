export default p => p instanceof Function ? p : obj => obj[p];
