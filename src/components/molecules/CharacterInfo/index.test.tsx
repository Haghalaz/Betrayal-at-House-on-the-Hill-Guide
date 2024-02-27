import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BiCake } from 'react-icons/bi';
import CharacterInfo from '.';

describe('CharacterSkill Component', () => {
  it('renders correctly', () => {
    const title = 'Aniversário';
    const data = '12 de maio';

    const { getByText } = render(<CharacterInfo title={title} data={data} icon={BiCake} />);

    const skillElement = getByText(title);
    expect(skillElement).toBeTruthy();
  });
});
