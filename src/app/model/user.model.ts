export interface UserInterface {
  id: number,
  username: string,
  token: string
}

export class UserModel {
  constructor(
    public username: string = '',
    public password: string = ''
  ) {
  }
}
