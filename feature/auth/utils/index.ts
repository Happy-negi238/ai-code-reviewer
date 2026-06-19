export const SIGN_IN_PATH = "/sign-in";
export const DEFAULT_AUTH_CALLBACK = "/dashboard";

export function getSafeCallbackPath(
  callback: string | null | undefined,
): string {
  if (callback?.startsWith("/") && !callback?.startsWith("//")) {
    return callback;
  }

  return DEFAULT_AUTH_CALLBACK;
}
