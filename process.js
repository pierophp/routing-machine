const { readFile } = require("fs").promises;

async function run() {
  const data = await readFile("data.json", "utf-8");
  const json = JSON.parse(data);

  const locations = json.destinations.map((destination, index) => ({
    name: `Address ${index + 1}`,
    distance: destination.distance,
    duration: destination.duration,
  }));

  const table = [];
  table.push(["", ...json.destinations.map((location) => location.name)]);

  for (const [i, distance] of json.distances.entries()) {
    table.push([json.destinations[i].name, ...distance]);
  }

  console.table(table);
}

run();
