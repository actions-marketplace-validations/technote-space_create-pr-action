import { resolve } from 'path';

export const ACTION_NAME         = 'Create PR Action';
export const ACTION_OWNER        = 'technote-space';
export const ACTION_REPO         = 'create-pr-action';
export const TARGET_NCU_COMMANDS = [
  'npx npm-check-updates ',
  'npx ncu ',
  'npm-check-updates ',
  'ncu ',
];
export const BIN_PATH            = resolve(__dirname, '../node_modules/npm-check-updates/build/src/bin');
export const BIN_FILE            = 'cli.js';
