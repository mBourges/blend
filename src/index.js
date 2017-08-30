import clone from './clone';
import update from './update';
import isArray from './isArray';

export function set(src, path, value) {
  let dest = clone(src);

  return update(dest, src, path, (clonedObj, finalPath) => {
    clonedObj[finalPath] = value;
    return clonedObj;
  });
}

export function del (src, path) {
  let dest = clone(src);

  return update(dest, src, path, (clonedObj, finalPath) => {
    if (isArray(clonedObj)) {
      if (clonedObj[finalPath] !== undefined) {
        clonedObj.splice(finalPath, 1);
      }
    } else {
      delete clonedObj[finalPath];
    }

    return clonedObj;
  });
}