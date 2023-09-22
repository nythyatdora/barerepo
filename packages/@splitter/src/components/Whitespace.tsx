import React from 'react';
import { Character } from './Character';

interface SplitterWhitespaceProps {
  component: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

function Whitespace(props: SplitterWhitespaceProps) {
  const { component, className, ...rest } = props;
  return (
    <Character
      {...rest}
      className={['splitter-whitespace', className].join(' ')}
      component={component}
      data-character=" "
    />
  );
}

export { Whitespace };
export type { SplitterWhitespaceProps };
