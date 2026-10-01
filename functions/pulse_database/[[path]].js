// Serves the pulse database showcase (Cloudflare Pages project
// `pulse-extraction`, deployed from mingshen-yen/pulse_extraction) under
// mingslab.com/pulse_database/ by proxying to its pages.dev host.
const ORIGIN = "https://pulse-extraction.pages.dev";
const PREFIX = "/pulse_database";

export async function onRequest({ request }) {
  const url = new URL(request.url);

  // The site fetches its data with relative paths, so it needs the
  // trailing slash to resolve them under /pulse_database/.
  if (url.pathname === PREFIX) {
    return Response.redirect(`${url.origin}${PREFIX}/${url.search}`, 301);
  }

  const upstream = new URL(url.pathname.slice(PREFIX.length) + url.search, ORIGIN);
  const res = await fetch(upstream, request);

  // pages.dev redirects (e.g. /index.html -> /) point at its own host;
  // keep the visitor on mingslab.com.
  const location = res.headers.get("Location");
  if (location) {
    const target = new URL(location, upstream);
    if (target.origin === ORIGIN) {
      const headers = new Headers(res.headers);
      headers.set("Location", PREFIX + target.pathname + target.search);
      return new Response(res.body, { status: res.status, headers });
    }
  }
  return res;
}
