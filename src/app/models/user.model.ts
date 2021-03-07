import { Interest } from './interest.model';

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  username: string;
  interests?: Interest[];
}
