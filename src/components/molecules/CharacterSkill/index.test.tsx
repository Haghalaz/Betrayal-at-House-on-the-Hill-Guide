import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CharacterSkill from '.';

describe('CharacterSkill Component', () => {
  it('renders correctly', () => {
    const skill = 'Strength';
    const values = [1, 2, 3, 4, 5, 6, 7, 8];
    const startIndex = 2;

    const { getByText, getAllByText } = render(<CharacterSkill skill={skill} values={values} startIndex={startIndex} />);

    const skillElement = getByText(skill);
    expect(skillElement).toBeTruthy();

    values.forEach((value) => {
      const valueElement = getAllByText(value.toString());
      expect(valueElement.length).toBe(1);
    });
  });

  it('renders font-bold correctly for startIndex', () => {
    const skill = 'Strength';
    const values = [1, 2, 3, 4, 5, 6, 7, 8];
    const startIndex = 2;

    const { getByText } = render(<CharacterSkill skill={skill} values={values} startIndex={startIndex} />);

    const boldValueElement = getByText(values[startIndex].toString());
    expect(boldValueElement).toHaveClass('font-bold');
  });
});
