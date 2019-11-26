import * as React from 'react';

import SmartForm from '../forms';
import { Wrapper, Filter } from './styles';

import { FieldProps } from '../forms/types';

interface OwnProps {
  options: FieldProps[];
  isOpen: boolean;
}

const Filters = ({ isOpen, options }: OwnProps) => (
  <Wrapper isOpen={isOpen}>
    <SmartForm buttons={[]} fields={options} form="filters" handleSubmit={() => {}} isFetching={false}>
      {({ controlledFields, Field }) =>
        controlledFields.map(filter => (
          <Filter key={filter.id}>
            <Field options={filter} />
          </Filter>
        ))
      }
    </SmartForm>
  </Wrapper>
);

export default Filters;
