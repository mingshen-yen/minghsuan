type Scalar = string | number | boolean;
export type Frontmatter = Record<string, Scalar | Scalar[]>;

const FRONTMATTER_BLOCK = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function unquote(value: string) {
  const quoted = /^(["'])([\s\S]*)\1$/.exec(value);
  return quoted ? quoted[2] : value;
}

function toScalar(value: string): Scalar {
  const raw = unquote(value.trim());
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (raw !== "" && !Number.isNaN(Number(raw))) return Number(raw);
  return raw;
}

/**
 * Parses the small YAML subset our content files use: `key: scalar` and
 * `key: [a, b, c]`. Anything richer belongs in a JSON file instead.
 */
export function parseFrontmatter(source: string) {
  const match = FRONTMATTER_BLOCK.exec(source);
  if (!match) return { data: {} as Frontmatter, body: source.trim() };

  const data: Frontmatter = {};

  for (const line of match[1].split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf(":");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (!key || value === "") continue;

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map(toScalar);
    } else {
      data[key] = toScalar(value);
    }
  }

  return { data, body: source.slice(match[0].length).trim() };
}

/**
 * First prose paragraph of a markdown body, used as the card blurb so the
 * summary never drifts from the article it introduces.
 */
export function firstParagraph(body: string) {
  const paragraph = body
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .find((block) => block && !/^(#{1,6}\s|[-*+]\s|\d+\.\s|>|!\[|\|)/.test(block));

  return paragraph?.replace(/\s*\r?\n\s*/g, " ") ?? "";
}
