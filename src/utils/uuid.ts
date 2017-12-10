import { v4 as uuid } from 'uuid';

export { v4 as uuid } from 'uuid';

export interface UUID {
  uuid: string;
}

export const ensureUUID = <T>(data: T): T & UUID => {
  return Object.assign({
    uuid: uuid(),
  }, data);
};
