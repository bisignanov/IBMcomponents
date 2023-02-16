import React, { useContext } from 'react';
import { Add20 } from '@carbon/icons-react';
import { NotFoundEmptyState } from '@carbon/ibm-products';
import { ThemeContext } from '../../ThemeSelector/ThemeContext';

export const NotFoundEmptyStateWrapper = () => {
  const theme = useContext(ThemeContext);
  const useDarkModeIllustration =
    theme?.state?.currentTheme?.value === 'carbon-theme--g90' ||
    theme?.state?.currentTheme?.value === 'carbon-theme--g100';

  return (
    <NotFoundEmptyState
      illustrationTheme={useDarkModeIllustration ? 'dark' : 'light'}
      size="sm"
      title="Hmm, your search didn’t return any results"
      subtitle="We were unable to retrieve any data."
      action={{
        text: 'Create new',
        onClick: () => console.log('Action click'),
        renderIcon: Add20,
        iconDescription: 'Add icon',
      }}
      link={{
        text: 'View documentation',
        href: 'https://www.carbondesignsystem.com',
      }}
    />
  );
};
