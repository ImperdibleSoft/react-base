import * as React from 'react';
import { shallow } from 'enzyme';

import { Table, THead, TBody, Tr, Th, Td } from '..';

describe('Table', () => {
  it('should render the complete set of table components', () => {
    const component = shallow(
      <Table>
        <THead>
          <Tr>
            <Th>Title</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Row 1</Td>
          </Tr>
          <Tr>
            <Td>Row 2</Td>
          </Tr>
        </TBody>
      </Table>
    );
    expect(component).toMatchSnapshot();
  });
});
