import { AirSearchModule } from './air-search.module';

describe('AirSearchModule', () => {
  let airSearchModule: AirSearchModule;

  beforeEach(() => {
    airSearchModule = new AirSearchModule();
  });

  it('should create an instance', () => {
    expect(airSearchModule).toBeTruthy();
  });
});
