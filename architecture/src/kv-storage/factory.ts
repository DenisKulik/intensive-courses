import {
  IKVStorageOptions,
  SerializableValue,
  IKVStorageEngine,
} from "./interface";
import DefaultEngine from "./engines";

export class KVFactory {
  readonly prefix: string;
  private readonly engine: IKVStorageEngine;

  constructor(prefix: string, options?: IKVStorageOptions) {
    this.prefix = prefix;
    this.engine = options?.engine ?? new DefaultEngine();
  }

  private getKey(key: string): string {
    return `${this.prefix}-${key}`;
  }

  async get<T extends SerializableValue>(key: string): Promise<T | null> {
    const rawData = await this.engine.get(this.getKey(key));
    return JSON.parse(rawData ?? "null");
  }

  async set(key: string, value: SerializableValue): Promise<void> {
    await this.engine.set(this.getKey(key), JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    await this.engine.remove(this.getKey(key));
  }
}
