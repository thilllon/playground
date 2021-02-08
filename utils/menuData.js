import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as MoveToInboxIcon,
  Movie as MovieIcon,
  Warning as WarningIcon,
  BrightnessLow as BrightnessLowIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Spa as SpaIcon,
  Home as HomeIcon,
  DirectionsRun as DirectionsRunIcon,
  Info as InfoIcon,
  Autorenew as AutorenewIcon,
} from '@material-ui/icons';
import { backendUrl } from '@utils/config';

const DefaultIcon = MenuIcon;

export const menuData = [
  {
    text: 'Home',
    href: backendUrl + '/',
    as: backendUrl + '/',
    icon: <HomeIcon />,
  },
  {
    text: 'Converter',
    href: backendUrl + '/converter',
    as: backendUrl + '/converter',
    icon: <AutorenewIcon />,
  },
  {
    text: 'Kohmasutra',
    href: backendUrl + '/kohmasutra',
    as: backendUrl + '/kohmasutra',
    icon: <SpaIcon />,
  },
  {
    text: 'Next.js + Material-UI + Emotion',
    href: backendUrl + '/next-mui-emotion',
    as: backendUrl + '/next-mui-emotion',
    icon: <MenuIcon />,
  },
  {
    text: 'Animal Run',
    href: backendUrl + '/games/animal-run',
    as: backendUrl + '/games/animal-run',
    icon: <DirectionsRunIcon />,
  },
  {
    text: 'About',
    href: backendUrl + '/about',
    as: backendUrl + '/about',
    icon: <InfoIcon />,
  },
  {
    text: 'Games',
    href: backendUrl + '/games',
    as: backendUrl + '/games',
    icon: <DefaultIcon />,
  },
  {
    text: 'TicTacToe',
    href: backendUrl + '/games/tictactoe',
    as: backendUrl + '/games/tictactoe',
    icon: <DefaultIcon />,
  },
  {
    text: 'Mine Sweeper',
    href: backendUrl + '/games/minesweeper',
    as: backendUrl + '/games/minesweeper',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Movies',
    href: backendUrl + '/movies',
    as: backendUrl + '/movies',
    icon: <MovieIcon />,
  },
  {
    text: 'test posts',
    href: backendUrl + '/posts',
    as: backendUrl + '/posts',
    icon: <MoveToInboxIcon />,
  },
  {
    text: 'Omok',
    href: backendUrl + '/games/omok',
    as: backendUrl + '/games/omok',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'The Mind',
    href: backendUrl + '/games/themind',
    as: backendUrl + '/games/themind',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Lost Cities',
    href: backendUrl + '/games/lostcities',
    as: backendUrl + '/games/lostcities',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Tistory',
    href: backendUrl + '/tistory',
    as: backendUrl + '/tistory',
    icon: <DefaultIcon />,
  },
];
