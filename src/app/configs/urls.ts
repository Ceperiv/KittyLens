import {environment} from '../../environmets/environment.dev'

const {api_key, API} = environment;

export const urls = {
  cats: (limit = 10, breed = '', order = 'RAND') =>
    `${API}/search?limit=${limit}&breed_ids=${breed}&order=${order}&api_key=${api_key}`
};
