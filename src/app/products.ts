export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Jeu XL',
    price: 799,
    description: 'Un grand jeu avec une des meilleures conceptions graphiques',
  },
  {
    id: 2,
    name: 'Jeu Mini',
    price: 699,
    description: 'Un jeu avec des graphisme originaux',
  },
  {
    id: 3,
    name: 'Jeu Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
