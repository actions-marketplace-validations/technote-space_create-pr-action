import {existsSync} from 'fs';
import {join} from 'path';
import {BIN_PATH, BIN_FILE} from '../src/constant';

describe('npm check updates', () => {
  it('should exist binary file', () => {
    expect(existsSync(join(BIN_PATH, BIN_FILE))).toBe(true);
  });
});
