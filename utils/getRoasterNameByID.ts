import { IRoaster } from "../types/Roaster";

export default function getRoasterNameById(
  id: string,
  allRoasters: IRoaster[]
): string {
  const roaster = allRoasters.find((item) => item.id === id);

  if (roaster) {
    return roaster.Name;
  }

  return "";
}
