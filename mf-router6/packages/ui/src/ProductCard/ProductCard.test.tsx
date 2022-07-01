import { render } from '@testing-library/react';
import { ProductCard } from '.';


describe('AppShell', () => {
  it('renders', () => {
    const { queryAllByAltText } = render(<ProductCard 
      title='Foo'
      description='Hello'
    />);

    expect(queryAllByAltText('Foo')).toBeTruthy();
    expect(queryAllByAltText('Hello')).toBeTruthy();
  })
})