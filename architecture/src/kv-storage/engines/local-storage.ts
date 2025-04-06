import type { IKVStorageEngine } from "./interface";

export default class LocalStorageEngine implements IKVStorageEngine {
  get(key: string): ReturnType<IKVStorageEngine["get"]> {
    return localStorage.getItem(key) ?? null;
  }

  set(key: string, value: string): ReturnType<IKVStorageEngine["set"]> {
    localStorage.setItem(key, value);
  }

  remove(key: string): ReturnType<IKVStorageEngine["remove"]> {
    localStorage.removeItem(key);
  }
}
