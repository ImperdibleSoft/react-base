import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import analyticsApi from '../../../../../common/apis/reports/analytics';

import { ButtonAsLink, LinkAsLink } from '../../styles';
import Content from '../content';

import { INTERACTIONS } from '../../../../../common/constants/analytics';
import { LinkProps } from '../../types';

interface OwnProps {
  options: LinkProps;
  shouldInherit?: boolean;
}

const Link = ({ options, shouldInherit }: OwnProps) => {
  const onClick = (link?: LinkProps) => {
    const { label } = options;

    analyticsApi.logSmartEvent({ category: INTERACTIONS, label: `${label} Link` });

    if (link && link.onClick) {
      link.onClick();
    }
  };

  const touchable = {
    label: options.label,
    icon: options.icon,
    iconLast: options.iconLast,
  };

  if (options.to && options.isExternal) {
    return (
      <LinkAsLink shouldInherit={shouldInherit}>
        <a
          id={options.id}
          href={options.to}
          onClick={() => {
            onClick();
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Content options={touchable} />
        </a>
      </LinkAsLink>
    );
  }

  if (options.to) {
    return (
      <LinkAsLink shouldInherit={shouldInherit}>
        <RouterLink
          id={options.id}
          onClick={() => {
            onClick();
          }}
          to={
            typeof options.to !== 'string'
              ? options.to
              : {
                  pathname: options.to,
                  state: { from: location && location.pathname },
                }
          }
        >
          <Content options={touchable} />
        </RouterLink>
      </LinkAsLink>
    );
  }

  return (
    <ButtonAsLink
      id={options.id}
      onClick={() => {
        onClick(options);
      }}
      shouldInherit={shouldInherit}
    >
      <Content options={touchable} />
    </ButtonAsLink>
  );
};

export default Link;
