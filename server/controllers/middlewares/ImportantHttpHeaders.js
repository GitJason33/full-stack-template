function cacheHttpReq(req, resp, next) {
  const period = 60 * 5; // 5 minutes

  if(req.method === 'GET')
    resp.set('Cache-control', `public, max-age=${period}`);
  else
    resp.set('Cache-control', 'no-store');

  next();
}


module.exports = cacheHttpReq;