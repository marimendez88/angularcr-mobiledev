import { User } from './user.model';
import { Interest } from './interest.model';

export interface Room {
  id: string;
  name: string;
  topic: Interest;
  participants: User[];
}
