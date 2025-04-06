import * as cookies from "./cookies";
import KVFactory, { SessionStorageEngine } from "./kv-storage";

// Test cookies
const cookieName = "test";
const cookieValue = "test";

cookies.set(cookieName, cookieValue);
console.log("Cookie set:", cookieName, "=", cookieValue);
console.log("Cookie get:", cookies.get(cookieName));
cookies.remove(cookieName);
console.log("Cookie after remove:", cookies.get(cookieName));

// Test session storage
const ss = KVFactory("user", { engine: new SessionStorageEngine() });
ss.set("user", "user");
console.log("Session storage set: user=user");
ss.get("user")
  .then((value) => {
    console.log("Session storage get:", value);
    ss.remove("user");
    return ss.get("user");
  })
  .then((value) => {
    console.log("Session storage after remove:", value);
  });
