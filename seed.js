const {db} = require("./server/db");
const { Butterfly, Perserve } = require("./server/db/models");


const butterflyData = [
  { name: "Silver-spotted Skipper", count: 0},
  { name: "Northern Cloudywing", count: 0 },
  { name: "Wild Indigo Duskywing", count: 0},
  { name: "Least Skipper", count: 0},
  { name: "Fiery Skipper", count: 0},
  { name: "Peck's Skipper", count: 0},
  { name: "Tawny-edged Skipper", count: 0},
  { name: "Northern Broken-dash", count: 0},
  { name: "Hobomok Skipper", count: 0},
  { name: "Zabulon Skipper", count: 0},
  { name: "Delaware Skipper", count: 0},
  { name: "Dusted Skipper", count: 0},
  { name: "Black Swallowtail", count: 0},
  { name: "Eastern Tiger Swallowtail", count: 0},
  { name: "Orange/Clouded Sulphur", count: 0},
  { name: "Cabbage White", count: 0},
  { name: "Coral Hairstreak", count: 0},
  { name: "Banded Hairstreak", count: 0},
  { name: "Gray Hairstreak", count: 0},
  { name: "Eastern Tailed-blue", count: 0},
  { name: "Spring/Summer Azure", count: 0},
  { name: "Monarch", count: 0},
  { name: "Viceroy", count: 0},
  { name: "Great Spangled Fritillary", count: 0},
  { name: "American Lady", count: 0},
  { name: "Painted Lady", count: 0},
  { name: "Red Admiral", count: 0},
  { name: "Common Buckeye", count: 0},
  { name: "Pearl Crescent", count: 0},
  { name: "Appalachian Brown", count: 0}
  { name: "Little Wood-satyr", count: 0}
  { name: "Common Wood-nymph", count: 0}
];

const perserveData = [
  { name: "Open Savanna" },
  { name: " Closed Savanna" },
  { name: "Wetland" },
  { name: "Disturbed" },
];

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  await Promise.all(
    perserveData.map((perserve) => Perserve.create(perserve))
  );
  await Promise.all(
    butterflyData.map((butterfly) => Butterfly.create(butterfly))
  );
}

//Separated the `seed` function from the `runSeed` function.
//Isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}
