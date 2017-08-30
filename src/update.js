import isNumber from './isNumber';
import isEmpty from './isEmpty';
import isString from './isString';
import parseKey from './parseKey';

export default function update (dest, src, path, changeCallback) {
  if (isEmpty(path)) {
    return src
  }

    if (isNumber(path)) {
      path = [path]
    }

    if (isString(path)) {
      return update(dest, src, path.split('.').map(parseKey), changeCallback)
    }
    var currentPath = path[0]

    // if (!dest || dest === src) {
    //   dest = clone(src, true, isNumber(currentPath))
    // }

    if (path.length === 1) {
      return changeCallback(dest, currentPath)
    }

    if (src != null) {
      src = src[currentPath]
    }

    dest[currentPath] = update(dest[currentPath], src, path.slice(1), changeCallback)

    return dest
  }