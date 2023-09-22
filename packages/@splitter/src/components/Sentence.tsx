import React from 'react';

interface SplitterSentenceProps {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

function Sentence(props: SplitterSentenceProps) {
  const { component: Component = 'span', className, ...rest } = props;
  return (
    <Component
      {...rest}
      className={['splitter-sentence', className].join(' ')}
      data-testid="test-splitter-sentence"
    />
  );
}

export { Sentence };
export type { SplitterSentenceProps };
