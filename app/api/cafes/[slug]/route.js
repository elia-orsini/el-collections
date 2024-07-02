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
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${databaseId}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  return Response.json(data);
}
