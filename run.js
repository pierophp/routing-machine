const { writeFile } = require("node:fs/promises");

const locations = [
  {
    name: "Address 3",
    coordinates: [-23.503530485394926, -46.59122391873819],
  },
  {
    name: "Address 14",
    coordinates: [-23.503123274414072, -46.68455271299441],
  },
  {
    name: "Address 19",
    coordinates: [-23.456574964428647, -46.6463302999291],
  },
  {
    name: "Address 21",
    coordinates: [-23.55521727532972, -46.639074236263525],
  },
];

const query = locations
  .map((location) => `${location.coordinates[1]},${location.coordinates[0]}`)
  .join(";");

const url = `http://127.0.0.1:5000/table/v1/driving/${query}?annotations=distance,duration`;

async function run() {
  const response = await fetch(url);
  const data = await response.json();

  await writeFile("data.json", JSON.stringify(data, null, 2));
}

run();
