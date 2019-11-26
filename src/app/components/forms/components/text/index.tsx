import * as React from 'react';
import TextArea from 'react-textarea-autosize';

import { Content } from '../../../touchable';
import { Wrapper, ErrorMessage, Input, Label, Description } from '../styles';
import { getDisabledStyles, getTextStyles } from './styles';

import { useThemeContext } from '../../../../contexts/theme';
import { FieldProps } from '../../types';

interface Options extends FieldProps {
  minLength?: number;
  maxLength?: number;
}

interface OwnProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  options: Options;
}

const Text: React.FC<OwnProps> = ({ onChange, onClick, onFocus, options }: OwnProps) => {
  const theme = useThemeContext();

  return (
    <Wrapper>
      <Description>
        <Label htmlFor={options.id}>
          <Content options={options} />
        </Label>
      </Description>

      {options.type !== 'textarea' && (
        <Input
          id={options.id}
          name={options.id}
          defaultValue={options.model || ''}
          disabled={options.isDisabled}
          maxLength={options.maxLength}
          minLength={options.minLength}
          onClick={onClick}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={options.placeholder}
          required={options.isRequired}
          type={options.type}
        />
      )}

      {options.type === 'textarea' && (
        <TextArea
          id={options.id}
          name={options.id}
          defaultValue={options.model || ''}
          disabled={options.isDisabled}
          maxLength={options.maxLength}
          minLength={options.minLength}
          onClick={onClick}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={options.placeholder}
          required={options.isRequired}
          style={options.isDisabled ? getDisabledStyles(theme.active) : getTextStyles(theme.active)}
        />
      )}

      {options.error && <ErrorMessage>{options.error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Text;
