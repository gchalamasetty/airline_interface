import { AirResultModule } from './air-result.module';

describe('AirResultModule', () => {
  let airResultModule: AirResultModule;

  beforeEach(() => {
    airResultModule = new AirResultModule();
  });

  it('should create an instance', () => {
    expect(airResultModule).toBeTruthy();
  });
});
