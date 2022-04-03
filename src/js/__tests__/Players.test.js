import Daemon from '../Daemon';
import Magician from '../Magician';
import MathType from '../MathType';

test('проверка Daemon', () => {
const daemon = new Daemon('Daemon');
daemon.attack = 100;
daemon.stoned = true;
daemon.distance = 2;
const result = daemon.attack;
expect(result).toBe(85);
});

test('проверка Magician', () => {
  const magician = new Magician('Magician');
  magician.attack = 100;
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
  });