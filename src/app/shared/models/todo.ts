export class Todo {
    constructor(
        public id?: string,
        public text?: string,
        public done = false,
        public categorie?: string,
        public id_user?: string
      ) {}
}
