import { generate } from 'shortid';

export interface UUID {
  uuid: string;
}

export const ensureUUID = <T>(data: T): T & UUID => {
  return Object.assign({
    uuid: generate(),
  }, data);
};

export const uuid = () => generate();