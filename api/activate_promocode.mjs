export function POST(request) {
  const { headers } = Request;
  return new Response(headers["X-name"] || "Not name");
}
