import styled from 'styled-components';

export const List = styled.ul`
  list-style: 'disc';
  padding: 12px 24px;
  padding-right: 0;
  margin-bottom: 12px;
`;
List.displayName = 'List';

export const Item = styled.li`
  list-style: disc;
`;
Item.displayName = 'Item';
