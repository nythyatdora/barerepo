import React from 'react';

interface SplitterCharacterProps {
  component?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

function Character(props: SplitterCharacterProps) {
  const { component: Component = 'span', className, ...rest } = props;
  return (
    <Component
      {...rest}
      className={['splitter-character', className].join(' ')}
      data-testid="test-splitter-character"
    />
  );
}

Character.defaultProps = {
  className: '',
};

export { Character };
export type { SplitterCharacterProps };
