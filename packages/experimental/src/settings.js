import { Canary } from './components/_Canary';

import featureFlags from './generated/feature-flags/feature-flags';
import pkgSettings from './global/js/package-settings';
import { settings as carbonSettings } from 'carbon-components';

export const carbon = {
  get prefix() {
    return carbonSettings.prefix;
  },
  set prefix(val) {
    carbonSettings.prefix = val;
  },
  get flags() {
    return featureFlags;
  },
};

export const pkg = {
  // If the component is enabled, return it for use. Otherwise
  // return a Canary placeholder, setting the name of the
  // replaced component and transferring any properties set.
  checkComponentEnabled: (component, name) =>
    pkgSettings.isComponentEnabled(name)
      ? component
      : Object.assign(
          Canary.bind(undefined, { componentName: name }),
          component
        ),
  ...pkgSettings,
};

export default { carbon, pkg };
