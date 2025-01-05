export async function GET(request, { params }) {
  const slug = params.slug;

  let databaseId;

  switch (slug) {
    case "2021":
      databaseId = process.env.BOOKS2021;
      break;

    case "2022":
      databaseId = process.env.BOOKS2022;
      break;

    case "2023":
      databaseId = process.env.BOOKS2023;

      break;

    case "2024":
      databaseId = process.env.BOOKS2024;
      break;

    case "2025":
      databaseId = process.env.BOOKS2025;
      break;

    default:
      break;
  }

  const response = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${databaseId}`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return Response.json(data);
}
