import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(5, 2)).toBe(25);

    expect(pipe.transform(5)).toBe(5);
  });
});
