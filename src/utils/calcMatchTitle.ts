import natural from "natural";

/**
 *  Calcula a similaridade de dois títulos.
 * @param title1
 * @param title2
 * @returns
 */
export const calcMatchTitle = (title1: string, title2: string): boolean => {
  const tokenizer = new natural.WordTokenizer(); // Utiliza a lib natural para tokenizar as palavras ( Quebra o titulo em varios fragmentos para fazer as comparacoes)
  const words1 = new Set(tokenizer.tokenize(title1)); // pega as palavras do title 1
  const words2 = new Set(tokenizer.tokenize(title2)); // pega as palavras do title 2

  const intersection = new Set([...words1].filter((word) => words2.has(word))); // gera uma interseção entre as palavras
  const minLength = Math.min(words1.size, words2.size);

  return intersection.size / minLength >= 0.8; // Considera títulos similares, se somente se, 80% das palavras forem iguais
};
