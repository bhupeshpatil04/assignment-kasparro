export function canonicalKey(name: string, symbol?: string) {
  if (symbol && symbol.trim()) {
    return symbol.trim().toUpperCase();
  }
  return name.trim().toLowerCase().replace(/\s+/g, "");
}
