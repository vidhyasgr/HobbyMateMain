/**
 * Created by vidhyasagar on 28.03.18.
 */

export  class FollowModel{

  private _emailId : string;
  private _following : boolean;


  constructor() {
  }


  get emailId(): string {
    return this._emailId;
  }

  set emailId(value: string) {
    this._emailId = value;
  }

  get following(): boolean {
    return this._following;
  }

  set following(value: boolean) {
    this._following = value;
  }
}
