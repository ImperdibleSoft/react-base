import styled from 'styled-components';

interface WrapperProps {
  backgroundColor: string;
  color: string;
}

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }: WrapperProps) => backgroundColor};
  border-radius: 4px;
  border: 1px solid ${({ color }: WrapperProps) => color};
  color: ${({ color }: WrapperProps) => color};
  display: block;
  padding: 10px;
  margin: 5px;
  text-align: left;
  transition: background-color 0.2s, border: 0.2s, color 0.2s;
  width: calc(100% - 10px);
`;
Wrapper.displayName = 'Wrapper';

export const MessageText = styled.p``;
MessageText.displayName = 'MessageText';

export const MessageButtonsWrapper = styled.div`
  & > div {
    margin-bottom: 0;

    & > a,
    & > button,
    & > span {
      background-color: transparent;
      border-color: transparent;
      color: inherit !important;
    }
  }
`;
MessageButtonsWrapper.displayName = 'MessageButtons';
