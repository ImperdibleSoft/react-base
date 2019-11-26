export interface TabProps {
  id: string;
  label?: string;
  icon?: string;
  iconLast?: boolean;
  to?: string;
  onClick?: (id: string) => void;
}
