import fs from "fs";
import path from "path";

/**
 * Funcao para ler os arquivos
 * @returns
 */
export const readData = async (): Promise<any> => {
  const filePath = path.join(__dirname, "../database/data01.json"); // caminho do arquivo
  try {
    const data = await fs.promises.readFile(filePath, "utf-8"); // faz a leitura
    return JSON.parse(data); // parseia os dados e retorna como obj
  } catch (error) {
    console.error("failed to read json:", error);
    return null;
  }
};
