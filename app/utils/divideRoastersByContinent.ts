import { IRoaster } from "../../types/Roaster";

export default function divideRoastersByContinent(roasters: IRoaster[]) {
  let groupedByContinent: { [key: string]: IRoaster[] } = {};

  const sortedRoasters = roasters.sort((a: IRoaster, b: IRoaster) => {
    const nameA = a.City.toLowerCase();
    const nameB = b.City.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  sortedRoasters.forEach((item: IRoaster) => {
    const continent = item.Continent;

    if (!groupedByContinent[continent]) {
      groupedByContinent[continent] = [];
    }

    groupedByContinent[continent].push(item);
  });

  return groupedByContinent;
}
