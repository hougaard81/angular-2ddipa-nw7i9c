export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Ford Explorer',
    price: 1.138520,
    description: 'Den nye store Ford Explorer repræsenterer et vartegn inden for SUV-ekspertise'
  },
  {
    id: 2,
    name: 'Ford Mustang',
    price: 807.238,
    description: 'Et helt igennem fantastisk og ikonisk køretøj'
  },
  {
    id: 3,
    name: 'Ford Kuga Plug-in Hybrid',
    price: 299.990,
    description: 'Kåret til Årets familiebil ved AutoAwards 2021'
  }
];


