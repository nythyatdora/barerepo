import type React from 'react';
import { isValidElement } from 'react';

const isElement = (element: React.ReactNode): boolean => {
  return isValidElement(element);
};

export { isElement };
