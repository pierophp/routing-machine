const { readFile } = require("fs").promises;

async function run() {
  const data = await readFile("table.json", "utf-8");
  const json = JSON.parse(data);

  const table = [];
  table.push(["", ...json.destinations.map((location) => location.name)]);

  for (const [i, distance] of json.distances.entries()) {
    table.push([json.destinations[i].name, ...distance.map((d) => `${d}m`)]);
  }

  for (const [i, duration] of json.durations.entries()) {
    table.push([
      json.destinations[i].name,
      ...duration.map((d) => `${d / 60}m`),
    ]);
  }

  console.table(table);
}

run();
