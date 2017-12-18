export const createArrayLooper = () => {
  let lastAccessedIndex = 0;

  const getNextItem = (items) => items[lastAccessedIndex++ % items.length];

  return (length: number, items: any[]) => {
    return new Array(length).fill(null).map(() => getNextItem(items));
  };
};
