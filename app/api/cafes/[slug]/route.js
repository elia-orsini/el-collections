export async function GET(request, { params }) {
  const slug = params.slug;

  let databaseId;

  switch (slug) {
    case "abd":
      databaseId = process.env.ABDNCAFES;
      break;

    case "edi":
      databaseId = process.env.EDICAFES;

      break;

    case "gla":
      databaseId = process.env.GLACAFES;
      break;

    default:
      break;
  }

  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${databaseId}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  return Response.json(data);
}
