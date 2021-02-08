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
import { subdirectoryUrl } from '@utils/config';

const DefaultIcon = MenuIcon;

export const menuData = [
  {
    text: 'Home',
    href: subdirectoryUrl + '/',
    as: subdirectoryUrl + '/',
    icon: <HomeIcon />,
  },
  {
    text: 'Converter',
    href: subdirectoryUrl + '/converter',
    as: subdirectoryUrl + '/converter',
    icon: <AutorenewIcon />,
  },
  {
    text: 'Kohmasutra',
    href: subdirectoryUrl + '/kohmasutra',
    as: subdirectoryUrl + '/kohmasutra',
    icon: <SpaIcon />,
  },
  {
    text: 'Next.js + Material-UI + Emotion',
    href: subdirectoryUrl + '/next-mui-emotion',
    as: subdirectoryUrl + '/next-mui-emotion',
    icon: <MenuIcon />,
  },
  {
    text: 'Animal Run',
    href: subdirectoryUrl + '/games/animal-run',
    as: subdirectoryUrl + '/games/animal-run',
    icon: <DirectionsRunIcon />,
  },
  {
    text: 'About',
    href: subdirectoryUrl + '/about',
    as: subdirectoryUrl + '/about',
    icon: <InfoIcon />,
  },
  {
    text: 'Games',
    href: subdirectoryUrl + '/games',
    as: subdirectoryUrl + '/games',
    icon: <DefaultIcon />,
  },
  {
    text: 'TicTacToe',
    href: subdirectoryUrl + '/games/tictactoe',
    as: subdirectoryUrl + '/games/tictactoe',
    icon: <DefaultIcon />,
  },
  {
    text: 'Mine Sweeper',
    href: subdirectoryUrl + '/games/minesweeper',
    as: subdirectoryUrl + '/games/minesweeper',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Movies',
    href: subdirectoryUrl + '/movies',
    as: subdirectoryUrl + '/movies',
    icon: <MovieIcon />,
  },
  {
    text: 'test posts',
    href: subdirectoryUrl + '/posts',
    as: subdirectoryUrl + '/posts',
    icon: <MoveToInboxIcon />,
  },
  {
    text: 'Omok',
    href: subdirectoryUrl + '/games/omok',
    as: subdirectoryUrl + '/games/omok',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'The Mind',
    href: subdirectoryUrl + '/games/themind',
    as: subdirectoryUrl + '/games/themind',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Lost Cities',
    href: subdirectoryUrl + '/games/lostcities',
    as: subdirectoryUrl + '/games/lostcities',
    icon: <BrightnessLowIcon />,
  },
  {
    text: 'Tistory',
    href: subdirectoryUrl + '/tistory',
    as: subdirectoryUrl + '/tistory',
    icon: <DefaultIcon />,
  },
];
