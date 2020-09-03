/**
 * Maps the given line number and col number to the corresponding index of the given string.
 *
 * Returns -1 if an index is not possible for the given string, such as the given column number
 * exceeds the actual number of columns in the string.
 * @param line
 * @param col
 * @param text
 * @param usesCRLF
 */
export const linecol2index = (
  line: number,
  col: number,
  text: string,
  usesCRLF: boolean = false
): number => {
  if (line <= 0 || col <= 0) {
    return -1
  }
  let lines: string[]
  if (usesCRLF) {
    lines = text.split(/\r\n|\n/, line)
  } else {
    lines = text.split(/\n/, line)
  }
  if (line > lines.length) return -1

  let index = 0
  for (let i = 0; i < line - 1; i++) {
    const currentLine = lines[i]
    index += currentLine.length
    index += text[index] === '\r' ? 2 : 1
  }
  const lineOfInterest = lines[line - 1]
  if (col - 1 <= lineOfInterest.length) {
    return index + col - 1
  } else {
    return -1;
  }
}

