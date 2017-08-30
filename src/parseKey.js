export default function (key) {
  var intKey = parseInt(key, 10);

  if (intKey.toString() === key) {
    return intKey;
  }

  return key;
}
