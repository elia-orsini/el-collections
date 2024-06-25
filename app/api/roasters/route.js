import { Client } from "@notionhq/client";

export async function GET() {
  const notion = new Client({
    auth: process.env.SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.ROASTERS,
  });

  return Response.json(data);
}
