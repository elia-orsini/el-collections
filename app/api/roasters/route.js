export async function GET() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.ROASTERS}`
  ).then((res) => res.json());

  return Response.json(data);
}
