import { promises as fs } from "fs";

async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const json = jsonData;
    let [n1, n2, n3] = jsonData.version.split(".");
    n3++;
    json.version = [n1, n2, n3].join(".");
    await fs.writeFile("./package.json", JSON.stringify(json, null, 2));
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

readJsonFile("./package.json");
