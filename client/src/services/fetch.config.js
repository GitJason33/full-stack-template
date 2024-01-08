const BASE_URL = import.meta.VITE_DEV_MODE === "dev" 
  ? import.meta.env.VITE_API_DEV
  : import.meta.env.VITE_API_PROD;


export const myFetch = async (method, endpoint, options = {}) => {
  const URI = endpoint.includes("http") ? endpoint : BASE_URL + endpoint;
  
  if(options?.body)
    options.body = JSON.stringify(options.body);

  const resp = await fetch(URI, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }).catch(err => console.error(`Server is down: ${err}`));



  const result = (resp.status === 204) ? "deleted!" : await resp?.json();

  if(resp?.ok) return [result, null];
  else         return [null, result];
}
