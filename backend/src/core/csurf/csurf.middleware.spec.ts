import { CsurfMiddleware } from './csurf.middleware';

describe('CsurfMiddleware', () => {
  it('should be defined', () => {
    expect(new CsurfMiddleware()).toBeDefined();
  });
});
