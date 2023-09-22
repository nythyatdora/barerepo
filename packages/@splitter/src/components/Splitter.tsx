import React, {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  useMemo,
} from 'react';
import { nanoid } from 'nanoid';
import { isElement, isWhitespace } from '../utilities';
import { Breakline } from './Breakline';
import { Character } from './Character';
import { Sentence } from './Sentence';
import { Whitespace } from './Whitespace';
import { Word } from './Word';
import type { SplitterBreaklineProps } from './Breakline';
import type { SplitterCharacterProps } from './Character';
import type { SplitterSentenceProps } from './Sentence';
import type { SplitterWordProps } from './Word';

interface DefaultSplitterProps {
  slotProps?: {
    sentence?: React.ComponentPropsWithoutRef<'span'> & SplitterSentenceProps;

    word?: React.ComponentPropsWithoutRef<'span'> & SplitterWordProps;

    character?: React.ComponentPropsWithoutRef<'span'> & SplitterCharacterProps;

    whitespace?: React.ComponentPropsWithoutRef<'span'> &
      SplitterCharacterProps;

    breakline?: React.ComponentPropsWithoutRef<'br'> & SplitterBreaklineProps;
  };
}

type SplitsProps = {
  text: string;
  noCharacterWrapper?: boolean;
} & DefaultSplitterProps;

type SplitsElementProps = {
  children?: React.ReactNode | React.ReactElement;
} & DefaultSplitterProps;

type SplitterProps = {
  component?: string;
  forwardedAs?: string;
  className?: string;
  children?: React.ReactNode;
  noCharacterWrapper?: boolean;
} & DefaultSplitterProps;

interface ContainerProps {
  component?: string;
  children?: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const Component = props.component || 'div';
  return (
    <Component
      {...props}
      className="splitter"
      ref={ref}
    />
  );
});

Container.displayName = 'Container';

const splits = (text: string) => {
  let wordIndex = 0;
  let characterIndex = 0;
  return text.split(/(\s+)/g).map((word) => ({
    index: !isWhitespace(word) ? wordIndex++ : undefined,
    id: nanoid(5),
    word,
    characters: Array.from(word).map((character) => ({
      index: !isWhitespace(character) ? characterIndex++ : undefined,
      id: nanoid(5),
      text: character,
    })),
  }));
};

function Splits(props: SplitsProps): JSX.Element {
  const { noCharacterWrapper = false, text, slotProps = {}, ...rest } = props;
  const whitespace = '\u00A0';
  const arr = useMemo(() => splits(text), [text]);

  return (
    <Sentence
      data-sentence={text.replace('\n', ' ')}
      {...slotProps.sentence}
    >
      {arr.map((split) => {
        let component = null;

        switch (true) {
          case !isWhitespace(split.word):
            switch (true) {
              case noCharacterWrapper:
                component = (
                  <>
                    {split.characters.map((character) => (
                      <Character
                        data-character={character.text}
                        data-character-index={character.index}
                        key={character.id}
                        {...slotProps.character}
                      >
                        {character.text}
                      </Character>
                    ))}
                  </>
                );
                break;

              default:
                component = (
                  <Word
                    data-word={split.word}
                    data-word-index={split.index}
                    key={split.id}
                    {...slotProps.word}
                  >
                    {split.characters.map((character) => (
                      <Character
                        data-character={character.text}
                        data-character-index={character.index}
                        key={character.id}
                        {...slotProps.character}
                      >
                        {character.text}
                      </Character>
                    ))}
                  </Word>
                );
            }
            break;

          case isWhitespace(split.word) && split.word !== '\n':
            component = (
              <Whitespace
                data-whitespace
                key={split.id}
                {...slotProps.whitespace}
              >
                {whitespace}
              </Whitespace>
            );
            break;

          default:
            component = (
              <Breakline
                key={split.id}
                {...slotProps.breakline}
              />
            );
        }

        return <Fragment key={split.id}>{component}</Fragment>;
      })}
    </Sentence>
  );
}

function SplitsElement(props: SplitsElementProps): JSX.Element {
  const { children, ...rest } = props;
  const key = useMemo(() => nanoid(5), [children]);

  if (typeof children === 'string') {
    return (
      <Splits
        key={key}
        text={children}
        {...rest}
      />
    );
  }

  if (isElement(children)) {
    const _children = children as JSX.Element;
    const { type, props } = _children;
    if (type === 'br') {
      return (
        <Breakline
          key={key}
          {...rest.breaklineProps}
        />
      );
    }

    if (props.children) {
      const element = cloneElement(_children, {}, [
        <SplitsElement
          key={key}
          {...rest}
        >
          {props.children}
        </SplitsElement>,
      ]);
      return <>{element}</>;
    }
  }

  return <>{children}</>;
}

const Splitter = forwardRef<HTMLDivElement, SplitterProps>((props, ref) => {
  const { component, className, children, ...rest } = props;
  const targets = useMemo(
    () =>
      Children.toArray(children).map((child) => ({
        id: nanoid(5),
        child,
      })),
    [children]
  );

  return (
    <Container
      className={className}
      component={component}
      ref={ref}
    >
      {targets.map((target) => (
        <SplitsElement
          key={target.id}
          {...rest}
        >
          {target.child}
        </SplitsElement>
      ))}
    </Container>
  );
});

export { Splitter };

Splitter.displayName = 'Splitter';
