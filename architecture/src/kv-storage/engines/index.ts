import type { IKVStorageEngine } from "./interface";
import LocalStorageEngine from "./local-storage";
import SessionStorageEngine from "./session-storage";

export { IKVStorageEngine, SessionStorageEngine };
export default LocalStorageEngine;
