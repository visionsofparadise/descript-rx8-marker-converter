fs = require("fs");

fs.readFile("transcript.txt", "utf8", (err, data) => {
  if (err) return console.log(err);

  // split by timecode
  const chunks1 = data.split("[");

  // remove first item which won't be a timecode
  const chunks2 = chunks1.slice(1, chunks1.length + 1);

  // split by marker seperator
  const chunks3 = chunks2.map((chunk) => chunk.split("---"));

  // remove transcript text
  const chunks4 = chunks3.map((chunk) => chunk[0]);

  // split timecode and marker name
  const chunks5 = chunks4.map((chunk) => chunk.split("]"));

  // remove space and new line from marker name
  // markers = ["timecode", "marker name"][]
  const markers = chunks5.map((chunk) => [
    chunk[0],
    chunk[1].slice(1, chunk[1].length - 1),
  ]);

  let rx8MarkerFile = "Marker file version: 1\nTime format: Time\n";

  for (const marker of markers) {
    rx8MarkerFile += marker[1] + "\t" + marker[0] + ".00000000" + "\n";
  }

  fs.writeFileSync("markers.txt", rx8MarkerFile);

  console.log("Success");
});
