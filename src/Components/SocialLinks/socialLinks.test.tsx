import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, afterEach } from 'vitest';
import SocialLinks from './socialLinks';
import userEvent from '@testing-library/user-event';
afterEach(() => cleanup());

describe('Social links', () => {
  it('renders the links correctly ', () => {
    render(<SocialLinks />);
    expect(screen.getByTestId('linkGithub')).toBeInTheDocument();
    expect(screen.getByTestId('linkLinkedin')).toBeInTheDocument();
    expect(screen.getByTestId('linkEmail')).toBeInTheDocument();
  });
  it('each anchor has correct href', () => {
    render(<SocialLinks />);
    expect(screen.getByTestId('linkGithub')).toHaveAttribute(
      'href',
      'https://github.com/SubagaS'
    );
    expect(screen.getByTestId('linkLinkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/subaga/'
    );
    expect(screen.getByTestId('linkEmail')).toHaveAttribute(
      'href',
      'mailto:subaga.sree@gmail.com'
    );
  });

  it('clicking the button triggers the navigation', async () => {
    render(<SocialLinks />);
    const user = userEvent.setup();
    const githubBtn = screen.getByTestId('githubBtn');
    const linkedinBtn = screen.getByTestId('linkedinBtn');
    const emailBtn = screen.getByTestId('emailBtn');
    await user.click(githubBtn);
    await user.click(linkedinBtn);
    await user.click(emailBtn);

    const githubAnchor = githubBtn.closest('a');
    expect(githubAnchor).toHaveAttribute('href', 'https://github.com/SubagaS');
    const linkedAnchor = linkedinBtn.closest('a');
    expect(linkedAnchor).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/subaga/'
    );
    const emailAnchor = emailBtn.closest('a');
    expect(emailAnchor).toHaveAttribute('href', 'mailto:subaga.sree@gmail.com');
  });
});
