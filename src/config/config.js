const searchBaseUrl = 'https://food2fork.com/api/search';
const getBaseUrl = 'https://food2fork.com/api/get';

const key = `?key=${process.env.REACT_APP_RECIPE_KEY}`;
export const searchUrl = `${searchBaseUrl}${key}&q=`;
export const getUrl = `${getBaseUrl}${key}&rId=`;
