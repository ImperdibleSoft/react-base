import * as React from 'react';

import { HOME } from '../../../../../common/constants/appRoutes';

import { Content } from '../../../../components/touchable';
import { Item } from '../menu/components/item';
import Sidebar from '../sidebar';
import { Logo, LogoLink, Header, HeaderBar, HeaderSpacer } from './styles';

import { modulesMenu } from '../../models';
import { HeaderMenu as HeaderMenuType } from '../../types';
import { useThemeContext } from '../../../../contexts/theme';

interface Item {
  id: string;
  icon?: string;
  lastIcon?: string;
  label?: string;
  to: string;
}

interface OwnProps {
  logo?: string;
  logSmartEvent: (options: { label: string; to: string }) => void;
  openMenu: string;
  toggleMenu: (elem: HeaderMenuType) => void;
}

const View: React.FC<OwnProps> = ({ logo, logSmartEvent, openMenu, toggleMenu }: OwnProps) => {
  const theme = useThemeContext();
  const items: Item[] = [];

  return (
    <Header>
      <HeaderBar>
        <>
          <Sidebar
            isOpen={openMenu === modulesMenu}
            handleClick={() => {
              toggleMenu(modulesMenu);
            }}
          >
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  <Item
                    theme={theme}
                    to={item.to}
                    onClick={() => {
                      toggleMenu(modulesMenu);
                    }}
                  >
                    <Content options={item} />
                  </Item>
                </li>
              ))}
            </ul>
          </Sidebar>

          {/* App's logo */}
          {logo && (
            <LogoLink
              to={HOME}
              onClick={() => {
                logSmartEvent({ label: 'Home icon', to: HOME });
              }}
            >
              <Logo src={logo} />
            </LogoLink>
          )}
        </>
      </HeaderBar>
      <HeaderSpacer />
    </Header>
  );
};

export default View;
