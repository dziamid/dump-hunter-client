export const createArrayLooper = () => {
  let lastAccessedIndex = 0;

  const getNextItem = (items) => items[lastAccessedIndex++ % items.length];

  return (length: number, items: any[]) => {
    return array(length).map(() => getNextItem(items));
  };
};

export const array = (length: number) => new Array(length).fill(undefined);