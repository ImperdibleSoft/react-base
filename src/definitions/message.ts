export interface Message {
  type: string;
  payload?: any;
  shouldFocus?: boolean;
  ports?: any[];
}
