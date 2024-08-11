export async function GET(request, { params }) {
  let databaseId;

  switch (params.slug) {
    case "abd":
      databaseId = process.env.ABDNCAFES;
      break;

    case "edi":
      databaseId = process.env.EDICAFES;
      break;

    case "gla":
      databaseId = process.env.GLACAFES;
      break;

    case "lon":
      databaseId = process.env.LONCAFES;
      break;
  }

  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${databaseId}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  return Response.json(data);
}
