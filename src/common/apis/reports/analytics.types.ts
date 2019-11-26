export interface AnalyticsInitParameter {
  tag: string;
}

export interface AnalyticsUser {
  id: number;
}

export interface CustomDimension {
  key: string;
  value: any;
}

export interface TrackingEvent {
  category: string;
  action?: string;
  label?: string;
  value?: number;
}

export interface SmartEvent {
  category: string;
  action?: string;
  label?: string;
  value?: number;
  component?: any;
}

export interface TimeTracking {
  category: string;
  variable?: string;
  label?: string;
  value?: number;
}
