export async function GET(request, { params }) {
  const slug = params.slug;

  let databaseId;

  switch (slug) {
    case "2022":
      databaseId = process.env.BOOKS2022;
      break;

    case "2023":
      databaseId = process.env.BOOKS2023;

      break;

    case "2024":
      databaseId = process.env.BOOKS2024;
      break;

    default:
      break;
  }

  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${databaseId}`
  ).then((res) => res.json());

  return Response.json(data);
}
