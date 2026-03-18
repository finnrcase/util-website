import "server-only";

import { existsSync } from "node:fs";
import { join } from "node:path";

export function assetExists(publicPath: string) {
  const normalizedPath = publicPath.replace(/^\/+/, "");
  return existsSync(join(process.cwd(), "public", normalizedPath));
}
