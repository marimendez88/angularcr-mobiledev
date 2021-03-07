import { Interest } from './interest.model';
import { Room } from './room.model';
import { User } from './user.model';
export interface ApplicationState {
  /**
   * * Current User using the app
   */
  user: User;
  /**
   * * Rooms Available within the app
   */
  rooms: Room[];
  /**
   * * List of Available Interests
   */
  interests: Interest[];
}
