import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type RouteProps = RouteComponentProps<{
  location: any;
}>;

interface OwnProps {
  children: any;
}

type Props = RouteProps & OwnProps;

const ScrollTop = ({ children, location }: Props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default withRouter(ScrollTop);
