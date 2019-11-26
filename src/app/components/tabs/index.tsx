import * as React from 'react';
import analyticsApi from '../../../common/apis/reports/analytics';

import Tab from './components/tab';
import { Wrapper, StyledTabs } from './styles';

import { INTERACTIONS } from '../../../common/constants/analytics';
import { TabProps } from './types';

interface OwnProps {
  options: TabProps[];
  activeTab: string;
}

const Tabs = ({ activeTab, options }: OwnProps) => {
  if (!options || !options.length) {
    return null;
  }

  const tabRefs = options.map((): React.RefObject<HTMLUListElement> => React.createRef());
  const [minWidth, setMinWidth] = React.useState(0);

  const setTabsMinWidth = () => {
    // Calc its width
    let requiredWidth = 0;
    tabRefs.forEach(tab => {
      if (tab.current) {
        requiredWidth += tab.current.offsetWidth;
      }
    });

    // Update styles
    setMinWidth(requiredWidth + 2);
  };

  React.useEffect(setTabsMinWidth, []);

  const handleClick = (tab: TabProps) => {
    analyticsApi.logSmartEvent({
      category: INTERACTIONS,
      label: `${tab.label} Tab`,
    });

    if (tab.onClick) {
      tab.onClick(tab.id);
    }
  };

  return (
    <Wrapper>
      <StyledTabs minWidth={minWidth}>
        {options.map((tab, idx) => (
          <Tab
            key={tab.id}
            options={tab}
            isActive={activeTab === tab.id}
            handleClick={() => {
              handleClick(tab);
            }}
            reference={tabRefs[idx]}
          />
        ))}
      </StyledTabs>
    </Wrapper>
  );
};

export default Tabs;
