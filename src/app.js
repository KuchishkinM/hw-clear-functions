export default function healthFunction(dataIn) {
  let result = '';
  if (dataIn.health >= 50 && dataIn.health <= 100) {
    result = 'healthy';
  }
  if (dataIn.health < 50 && dataIn.health >= 15) {
    result = 'wounded';
  }
  if (dataIn.health < 15 && dataIn.health > 0) {
    result = 'critical';
  }
  return result;
}
