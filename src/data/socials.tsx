import { ReactNode } from 'react';
import {
  IconApple,
  IconDiscord,
  IconFacebook,
  IconGoogle,
  IconTelegram,
} from '../components/icons/icons';
interface ISocialList {
  id: number;
  iconName: ReactNode;
}

export const social: ISocialList[] = [
  {
    id: 1,
    iconName: <IconGoogle />,
  },
  {
    id: 2,
    iconName: <IconApple />,
  },
  {
    id: 3,
    iconName: <IconFacebook />,
  },
  {
    id: 4,
    iconName: <IconDiscord />,
  },
  {
    id: 5,
    iconName: <IconTelegram />,
  },
];
