export interface Link {
  _id: string;
  name: string;
  url: string;
  username: string;
  description: string;
  image: string;
  pinned: boolean;
  tags: Array<string>;
}
