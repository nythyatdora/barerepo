import { some } from 'lodash';

const WHITESPACE_CHARS = [
  ' ',
  '  ',
  '\b',
  '\t',
  '\n',
  '\v',
  '\f',
  '\r',
  `\"`,
  `\'`,
  `\\`,
  '\u0008',
  '\u0009',
  '\u000A',
  '\u000B',
  '\u000C',
  '\u000D',
  '\u0020',
  '\u0022',
  '\u0027',
  '\u005C',
  '\u00A0',
  '\u2028',
  '\u2029',
  '\uFEFF',
];

const hasWhitespace = (char: string): boolean => {
  return some((w) => char.includes(w), WHITESPACE_CHARS);
};

const isWhitespace = (char: string): boolean => {
  return hasWhitespace(char);
};

export { isWhitespace };
