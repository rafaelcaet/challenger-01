import fs from "fs";
import path from "path";

// path do json

// Função para ler o json
export default async function readData(): Promise<any> {
  const filePath = path.join(__dirname, "../database/data01.json"); // caminho do arquivo
  try {
    const data = fs.readFileSync(filePath, "utf-8"); // faz a leitura
    return JSON.parse(data); // parseia os dados e retorna como obj
  } catch (error) {
    console.error("failed to read json:", error);
    return null;
  }
}
