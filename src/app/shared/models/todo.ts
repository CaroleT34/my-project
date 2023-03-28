export class Todo {
  constructor(
    public id?: string,
    public text?: string,
    public editable = false,
    public done = false,
  ) {}
}
