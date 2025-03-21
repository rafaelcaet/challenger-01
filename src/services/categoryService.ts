import { CategoryGroup } from "../types/CategoryGroup";
import { calcMatchTitle } from "../utils/calcMatchTitle";
import { formatTitle } from "../utils/formatTitle";
import { readData } from "../utils/readFile";

/**
 * Lista todos so produtos por categorias
 * @returns
 */
export const listAllProducts = async (): Promise<CategoryGroup[]> => {
  const categoryMap = new Map<string, CategoryGroup>(); // Define as categorias
  const data = await readData(); // leitura do arquivo

  for (const item of data) {
    // Percorre os itens
    const normalizedTitle = formatTitle(item.title); // Formata o titulo

    let matchedCategory = null; // Init a categoria
    for (const [category, group] of categoryMap) {
      // Percorre as categorias existentes para ver se o item da match em alguma
      // Verifica se o titulo do item é similar ao titulo da categoria
      if (calcMatchTitle(normalizedTitle, formatTitle(category))) {
        matchedCategory = category;
        break;
      }
    }

    if (matchedCategory) {
      // Se a categoria existir -> adiciona o item nela e incrementa o contador
      const existingGroup = categoryMap.get(matchedCategory)!;
      existingGroup.products.push(item);
      existingGroup.count++;
    } else {
      // Se não existir -> cria uma nova categoria e adiciona o item e seta o contador como 1
      categoryMap.set(item.title, {
        category: item.title,
        count: 1,
        products: [item],
      });
    }
  }

  return Array.from(categoryMap.values());
};
