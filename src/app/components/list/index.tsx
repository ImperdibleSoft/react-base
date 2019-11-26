import * as React from 'react';

import { List as Wrapper, Item } from './styles';

interface OwnProps {
  children: (props: { Item: typeof Item }) => React.ReactNode;
}

const List: React.FC<OwnProps> = ({ children }: OwnProps) => <Wrapper>{children({ Item })}</Wrapper>;

export default List;
