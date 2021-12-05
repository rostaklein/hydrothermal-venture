export const parseAndClearInputData = (input: string): string[] =>
  input
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
