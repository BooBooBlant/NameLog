export function POST(request) {
  const { headers } = request;
  console.log(request.headers);
  return new Response(headers.get("x-name") || "Not name");
}
