/**
 * Formata o titulo do produto
 * @param title
 * @returns
 */
export const formatTitle = (title: string) => {
  return title.toLowerCase().replace(/[.,-]/g, " ").replace(/\s+/g, " ").trim();
};
