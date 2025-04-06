import { KVFactory } from "./factory";
import type { IKVStorageOptions, SerializableValue } from "./interface";
import type { IKVStorageEngine } from "./engines";
import LocalStorageEngine, { SessionStorageEngine } from "./engines";

export type { IKVStorageOptions, SerializableValue } from "./interface";
export { IKVStorageEngine, SessionStorageEngine, LocalStorageEngine };

export default (prefix: string, options?: IKVStorageOptions) => {
  return new KVFactory(prefix, options);
};
