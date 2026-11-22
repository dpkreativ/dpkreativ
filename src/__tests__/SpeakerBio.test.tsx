import { fireEvent, render, screen, within } from '@testing-library/react';
import SpeakerBio from '@/components/speaker-bio';
import content from '@/data/content.json';

describe('SpeakerBio', () => {
  const writeText = jest.fn();
  const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

  beforeEach(() => {
    writeText.mockReset();
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });
  });

  afterEach(() => {
    if (originalClipboard) {
      Object.defineProperty(navigator, 'clipboard', originalClipboard);
    } else {
      Reflect.deleteProperty(navigator, 'clipboard');
    }
  });

  it('copies only the speaker bio and confirms it', async () => {
    writeText.mockResolvedValue(undefined);
    render(<SpeakerBio bio={content.speakerBio} />);

    const section = screen.getByRole('region', { name: 'Speaker bio' });
    expect(within(section).getByText(content.speakerBio)).toBeVisible();
    fireEvent.click(within(section).getByRole('button', { name: 'Copy speaker bio' }));

    expect(writeText).toHaveBeenCalledWith(content.speakerBio);
    expect(await within(section).findByText('Bio copied.')).toHaveAttribute('role', 'status');
  });

  it('explains how to copy manually when clipboard access fails', async () => {
    writeText.mockRejectedValue(new Error('Clipboard unavailable'));
    render(<SpeakerBio bio={content.speakerBio} />);

    fireEvent.click(screen.getByRole('button', { name: 'Copy speaker bio' }));

    expect(await screen.findByText(/select and copy the bio above/)).toBeVisible();
  });
});
