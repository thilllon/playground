export const drawerWidth = 240;
export const ASPECT_RATIO = 89 / 64; // poker card 64 × 89 mm
const subdirectory = process.env.SUBDIRECTORY ?? '';
export const subdirectoryUrl = subdirectory ? `/${subdirectory}` : '';
