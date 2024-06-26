export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string; // Optional property
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICrypto;
}

interface IHair {
  color: string;
  type: string;
}

interface IAddress {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface ICompany {
  address: IAddress;
  department: string;
  name: string;
  title: string;
}

interface ICrypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface IDepartment {
  male: number;
  female: number;
  ageRange: string;
  hair: {[name: string]: number};
  addressUser:{[name: string]: string}
}