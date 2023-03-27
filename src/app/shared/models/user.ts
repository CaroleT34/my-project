import { Country } from './country';

export class User {
  constructor(
    public id?: string,
    public lastname?: string,
    public firstname?: string,
    public address?: Address,
    public email?: string,
    public gender?: string,
    public isMarried?: boolean,
    public country?: Country,
  ) {}
}

export class Address {
  constructor(
    public street?: string,
    public zipcode?: string,
    public city?: string,
  ) {}
}
