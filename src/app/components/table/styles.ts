import styled from 'styled-components';

import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
`;
Table.displayName = 'Table';

export const THead = styled.thead`
  margin-bottom: 10px;
  width: 100%;
`;
THead.displayName = 'THead';

export const TBody = styled.tbody`
  margin-bottom: 10px;
  width: 100%;
`;
TBody.displayName = 'TBody';

interface RowProps extends ThemedComponent {
  bold?: boolean;
  color?: string;
  hasLine?: boolean;
  singleLine?: boolean;
}
export const Tr = styled.tr`
  border-bottom: 1px solid
    ${({ hasLine, theme }: RowProps) => (hasLine ? getColor('TABLE_BORDER', theme.active) : 'transparent')};
  color: ${({ color }: RowProps) => color};
  font-weight: ${({ bold }: RowProps) => (bold ? 'bold' : undefined)};
  text-align: center;
  transition: border: 0.2s, color 0.2s;
  width: 100%;

  & > th,
  & > td {
    padding-top: ${({ hasLine }: RowProps) => (hasLine ? '20px' : undefined)};
    white-space: ${({ singleLine }: RowProps) => (singleLine ? 'nowrap' : undefined)};
  }
`;
Tr.displayName = 'Tr';

interface CellProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  color?: string;
  singleLine?: boolean;
  verticalAlign: string;
}
export const Th = styled.th`
  color: ${({ color }: CellProps) => color || 'inherit'};
  font-weight: ${({ bold }: CellProps) => (bold ? 'bold' : 'inherit')};
  margin: 0;
  padding: 5px;
  text-align: ${({ align = 'left' }: CellProps) => align};
  vertical-align: ${({ verticalAlign }: CellProps) => verticalAlign};
  white-space: ${({ singleLine }: CellProps) => (singleLine ? 'nowrap' : 'inherit')};
`;
Th.displayName = 'Th';

export const Td = styled.td`
  color: ${({ color }: CellProps) => color || 'inherit'};
  font-weight: ${({ bold }: CellProps) => (bold ? 'bold' : 'inherit')};
  margin: 0;
  padding: 5px;
  text-align: ${({ align = 'left' }: CellProps) => align};
  vertical-align: ${({ verticalAlign }: CellProps) => verticalAlign};
  white-space: ${({ singleLine }: CellProps) => (singleLine ? 'nowrap' : 'inherit')};
`;
Td.displayName = 'Td';
