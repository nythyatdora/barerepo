import React from 'react';

interface SplitterWordProps {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

function Word(props: SplitterWordProps) {
  const { component: Component = 'span', className, ...rest } = props;
  return (
    <Component
      {...rest}
      className={['splitter-word', className].join(' ')}
    />
  );
}

export { Word };
export type { SplitterWordProps };
