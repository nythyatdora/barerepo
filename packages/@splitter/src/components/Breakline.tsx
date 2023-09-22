import React from 'react';

interface SplitterBreaklineProps {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

function Breakline(props: SplitterBreaklineProps) {
  const { component: Component = 'span', className, ...rest } = props;
  return (
    <Component
      {...rest}
      className={['splitter-breakline', className].join(' ')}
    />
  );
}

export { Breakline };
export type { SplitterBreaklineProps };
