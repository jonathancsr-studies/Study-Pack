import { render } from '@testing-library/react';
import { AppShell } from '.';


describe('AppShell', () => {
  it('renders', () => {
    const { queryAllByAltText } = render(<AppShell 
      title='foo'
      navLinks={[]}
      routes={[{ path: '/', element: () => <div>Hello</div>}]}
    />);

    expect(queryAllByAltText('Foo')).toHaveLength(0);
    expect(queryAllByAltText('Hello')).toBeTruthy();
  })
})