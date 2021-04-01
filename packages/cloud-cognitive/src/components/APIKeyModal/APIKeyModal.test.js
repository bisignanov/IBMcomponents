/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { APIKeyModal } from '.';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const { name } = APIKeyModal;
const defaultProps = {
  apiKey: '123-456-789',
  apiKeyInputId: 'apiKeyInput',
  apiKeyLabel: 'API key',
  copyButtonText: 'Copy',
  open: true,
  secondaryButtonText: 'Close',
  successBody: (
    <p>
      This is your unique API key and is non-recoverable. If you lose this API
      key, you will have to reset it.
    </p>
  ),
  successHeader: 'API key successully created',
};

const standardProps = {
  ...defaultProps,
  apiKey: '',
  apiKeyVisibility: true,
  createButtonText: 'Generate API key',
  createHeader: 'Generate an API key',
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  loadingMessage: 'your key is being created. please wait...',
  loading: false,
  modalBody:
    'Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources.',
  nameHelperText:
    'Providing the application name will help you idenfity your api key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
};

describe(name, () => {
  test('renders with minimal setup', () => {
    const { click } = fireEvent;
    const { container } = render(<APIKeyModal {...defaultProps} />);
    const copyBtn = container.querySelector('.bx--btn--primary');
    click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('123-456-789');
  });

  test('renders with standard setup', () => {
    const { click, change } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();

    const { getByText, container, rerender } = render(
      <APIKeyModal {...standardProps} onRequestSubmit={onRequestSubmit} />
    );

    const nameInput = container.querySelector('.bx--text-input');
    const generateBtn = getByText('Generate API key');

    change(nameInput, { target: { value: 'testkey' } });
    click(generateBtn);
    expect(onRequestSubmit).toHaveBeenCalled();

    rerender(<APIKeyModal {...defaultProps} apiKey="444-444-444-444" />);
    const copyBtn = getByText('Copy');
    click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      '444-444-444-444'
    );
  });
});
