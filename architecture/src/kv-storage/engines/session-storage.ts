import type { IKVStorageEngine } from "./interface";

export default class SessionStorageEngine implements IKVStorageEngine {
  get(key: string): ReturnType<IKVStorageEngine["get"]> {
    return sessionStorage.getItem(key) ?? null;
  }

  set(key: string, value: string): ReturnType<IKVStorageEngine["set"]> {
    sessionStorage.setItem(key, value);
  }

  remove(key: string): ReturnType<IKVStorageEngine["remove"]> {
    sessionStorage.removeItem(key);
  }
}
