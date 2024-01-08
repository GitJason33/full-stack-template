function importantHttpHeaders(req, resp, next) {
  // cache header
  const period = 60 * 5; // 5 minutes

  if(req.method === 'GET')
    resp.setHeader('Cache-control', `public, max-age=${period}`);
  else
    resp.setHeader('Cache-control', 'no-store');


  // security header
  resp.setHeader('Content-Security-Policy', "default-src 'self'")


  next();
}


module.exports = importantHttpHeaders;