import isArray from './isArray';

export default function (value) {
  if (!value) {
    return true;
  }

  if (isArray(value) && value.length === 0) {
    return true;
  } else if (value instanceof Object) {
    return Object.keys(value).length === 0;
  }

  return false;
}