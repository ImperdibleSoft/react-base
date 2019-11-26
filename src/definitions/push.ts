import { NotificationAction } from './notification';

interface Data {
  type: string;
}

interface ActivityData extends Data {
  company: {
    id: string;
    slug: string;
    name: string;
  };
  idElement: string;
  idModule: string;
  verb: string;
}

export interface ActivityPush {
  actions: NotificationAction[];
  body: string;
  data: ActivityData;
  icon?: string;
  image?: string;
  title: string;
}

export type PushData = ActivityPush;
