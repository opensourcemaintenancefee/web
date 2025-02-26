export async function onRequest(context) {
  context.passThroughOnException();
  const forwardedRequest = new Request(context.request);
  forwardedRequest.headers.delete('cookie');

  return await fetch("https://plausible.io/api/event", forwardedRequest);
}
