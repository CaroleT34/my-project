import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/shared/models/country';
import { User, Address } from 'src/app/shared/models/user';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  public countries: Country[] = [
    new Country('91041f89-9e55-4d66-b368-7e3835212721', 'Inde'),
    new Country('dfc5de44-ed89-458b-825a-2a313e28bc9a', 'France'),
    new Country('b0be11c0-bdd0-4621-ae30-5645b77e480a', 'Espagne'),
  ];

  public contact = new User();
  public address = new Address();

  constructor() {
    this.contact.address = this.address;
  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}