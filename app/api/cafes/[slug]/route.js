import { Client } from "@notionhq/client";

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

  const notion = new Client({
    auth: process.env.SECRET,
  });

  const data = await notion.databases.query({
    database_id: databaseId,
  });

  return Response.json(data);
}
