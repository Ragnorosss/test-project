import { ReactNode } from 'react';

export interface ISelectStaticProps {
  id: number;
  name: string;
  icon: ReactNode;
}

export type TOrder = {
  id: string;
  transactionId: string;
  createAt: string;
  status: OrderStatus;
  gameName: string;
  gameID: string;
  ammount: string;
  goods: {
    people: string;
    price: string;
    discount: string;
  };
};

enum OrderStatus {
  Success,
  Pending,
  Decline,
}
