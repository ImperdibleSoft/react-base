import * as React from 'react';
import analyticsApi from '../../../common/apis/reports/analytics';

import View from './components/view';

import { INTERACTIONS } from '../../../common/constants/analytics';
import { noMenu } from './models';
import { HeaderMenu } from './types';

const logo = require('../../../images/logo.png');

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(noMenu);

  const logSmartEvent = (options: {}) => {
    analyticsApi.logSmartEvent({ ...options, category: INTERACTIONS });
  };

  const toggleMenu = (elem: HeaderMenu) => {
    let action = '';

    // Close any open menu
    if (elem === openMenu) {
      action = 'Close';
      setOpenMenu(noMenu);

      // Open a different menu
    } else {
      action = 'Open';
      setOpenMenu(elem);
    }

    logSmartEvent({
      label: `${action} ${elem} toggler`,
    });
  };

  return <View logo={logo} logSmartEvent={logSmartEvent} openMenu={openMenu} toggleMenu={toggleMenu} />;
};

export default Header;
