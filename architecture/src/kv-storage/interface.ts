import type { IKVStorageEngine } from "./engines";

export { IKVStorageEngine } from "./engines";

export interface IKVStorageOptions {
  engine: IKVStorageEngine;
}

export type SerializableValue =
  | SerializablePrimitiveValue
  | SerializablePrimitiveValue[]
  | { [key: string]: SerializableValue }
  | { toJSON: SerializablePrimitiveValue };

export type SerializablePrimitiveValue = string | number | boolean | null;
