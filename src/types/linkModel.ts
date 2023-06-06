export interface Link {
  _id: string;
  name: string;
  url: string;
  username: string;
  description: string;
  icon: string;
  pinned: boolean;
  tags: Array<string>;
}
