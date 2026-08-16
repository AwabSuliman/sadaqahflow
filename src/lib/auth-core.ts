import type { Role } from "./types";

export type AccountIntent = "driver" | "recipient";

export type AuthProfile = {
  email: string;
  name: string;
  role: Role;
  userId: string;
};

export type AuthClaims = {
  app_metadata?: Record<string, unknown>;
  email?: string;
  sub?: string;
  user_metadata?: Record<string, unknown>;
};

export function roleCanAccess(actualRole: Role, allowedRoles: Role[]) {
  return actualRole === "admin" || allowedRoles.includes(actualRole);
}

export function accountIntentMismatch(actualRole: Role, expectedRole: AccountIntent) {
  if (actualRole === expectedRole) return null;

  if (actualRole === "recipient") {
    return "This account is registered for delivery requests, not as a driver.";
  }

  if (actualRole === "driver") {
    return "This account is registered as a driver, not for delivery requests.";
  }

  return "This account is registered as an administrator.";
}

export function safeRedirectPath(path: FormDataEntryValue | null | string | undefined) {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return "/dashboard";
  }

  return path;
}

function readRole(claims: AuthClaims): Role {
  const trustedRole = claims.app_metadata?.role;
  const requestedRole = claims.user_metadata?.role;

  if (trustedRole === "admin" || trustedRole === "driver" || trustedRole === "recipient") {
    return trustedRole;
  }

  return requestedRole === "driver" ? "driver" : "recipient";
}

export function profileFromClaims(claims: AuthClaims): AuthProfile {
  const name = claims.user_metadata?.name;

  return {
    email: typeof claims.email === "string" ? claims.email : "",
    name: typeof name === "string" && name.trim() !== "" ? name : "Signed-in user",
    role: readRole(claims),
    userId: typeof claims.sub === "string" ? claims.sub : "",
  };
}
