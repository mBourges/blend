import isArray from './isArray';

export default function (obj, createIfEmpty, assumeArray) {
  if(!obj) {
    if (createIfEmpty) {
        if (assumeArray) {
          return []
        }

        return {}
    }
  } else if(isArray(obj)) {
    return obj.slice(0);
  } else if (obj instanceof Object) {
    return Object.assign({}, obj)
  } else {
    throw new Error('clone accepts only array or object')
  }
}
