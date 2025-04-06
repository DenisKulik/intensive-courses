export function get(name: string): string | undefined {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return undefined;
}

export function set(
  name: string,
  value: string,
  options: {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
  } = {}
): void {
  const cookieString = `${name}=${value}; ${
    options.expires ? `expires=${options.expires.toUTCString()}` : ""
  }; ${options.path ? `path=${options.path}` : ""}; ${
    options.domain ? `domain=${options.domain}` : ""
  }; ${options.secure ? "secure" : ""}; ${
    options.sameSite ? `sameSite=${options.sameSite}` : ""
  }`;
  document.cookie = cookieString;
}

export function remove(
  name: string,
  options: { path?: string; domain?: string } = {}
): void {
  const cookieString = `${name}=; ${
    options.path ? `path=${options.path}` : ""
  }; ${options.domain ? `domain=${options.domain}` : ""}`;
  document.cookie = cookieString;
}
