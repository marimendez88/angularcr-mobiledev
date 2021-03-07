import { Interest } from './../models/interest.model';
import { Room } from './../models/room.model';
import { ApplicationState } from './../models/application.model';
import { Injectable } from '@angular/core';
import { User } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  BaseAppState: ApplicationState = {
    user: null,
    rooms: [],
    interests: [],
  };

  private localState: ApplicationState = undefined;

  constructor() {}

  /**
   *  * Initialize the game state model
   */
  initializeAppState() {
    this.localState = this.BaseAppState;
  }

  /**
   * !  Getters and Setters
   */

  /**
   * ? Actual Application State
   */
  get AppState(): ApplicationState {
    return this.localState;
  }

  /**
   * ? Setting the user value
   */
  set user(value: User) {
    this.localState.user = value;
  }
  /**
   * ? Getting the user value
   */
  get user(): User {
    return this.localState.user;
  }

  /**
   * ? Setting all available rooms
   */
  set rooms(value: Room[]) {
    this.localState.rooms = value;
  }
  /**
   * ? Getting all available rooms
   */
  get rooms(): Room[] {
    return this.localState.rooms;
  }

  /**
   * ? Getting all available interest
   */
  set interests(value: Interest[]) {
    this.localState.interests = value;
  }
  /**
   * ? Getting all available interest
   */
  get interests(): Interest[] {
    return this.localState.interests;
  }
}
