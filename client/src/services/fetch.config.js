const BASE_URL = "http://localhost:4500/api";

const headers = {
  "Content-Type": "application/json",
  "api-key": "secret key"
};


export const myFetch = async (method, endpoint, options = {}) => {
  const URI = endpoint.includes("http") ? endpoint : BASE_URL + endpoint;
  
  options?.body && (options.body = JSON.stringify(options.body))


  const resp = await fetch(URI, {
    method,
    headers,
    ...options,
  }).catch(err => console.error(`Server is down: ${err}`));



  const result = (resp.status === 204) ? "deleted!" : await resp?.json();

  if(resp?.ok) return [result, null];
  else         return [null, result];
}
