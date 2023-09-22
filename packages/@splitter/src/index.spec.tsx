import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Splitter } from './index';

describe('Splitter', () => {
  const text = 'Hello, World 🌎!';

  it('should match snapshot', () => {
    const tree = renderer.create(<Splitter>{text}</Splitter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const setup = (text: string) => {
    render(<Splitter>{text}</Splitter>);
  };

  const defaultSetup = () => {
    setup(text);
  };

  it('should render the sentence attribute correctly', () => {
    defaultSetup();
    const sentenceComponent = screen.getByTestId('test-splitter-sentence');
    const sentence = sentenceComponent.getAttribute('data-sentence');
    expect(sentence).toBe(text);
  });

  it('should render all the characters attribute correctly', async () => {
    defaultSetup();
    const characterComponents = await screen.findAllByTestId(
      'test-splitter-character'
    );
    const characters = characterComponents.map((component) =>
      component.getAttribute('data-character')
    );
    const sentence = characters.join('');
    expect(sentence).toBe(text);
  });
});
