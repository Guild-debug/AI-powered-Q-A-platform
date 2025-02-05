addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request with different pages based on the URL path.
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);
  let response;

  switch (url.pathname) {
    case '/':
      response = new Response(await fetchAsset('pages/index.html'), {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
      break;
    case '/about':
      response = new Response(await fetchAsset('pages/about.html'), {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
      break;
    case '/contact':
      response = new Response(await fetchAsset('pages/contact.html'), {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
      break;
    default:
      response = new Response('404 Page Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      });
      break;
  }

  return response;
}

/**
 * Fetch the content of an asset.
 * @param {string} path - The path to the asset.
 */
async function fetchAsset(path) {
  const response = await fetch(`https://raw.githubusercontent.com/your-username/your-repo/main/${path}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return await response.text();
}
