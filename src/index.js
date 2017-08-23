export const DATE_NOW = Symbol('DATE_NOW');

const dateNow = () => Date.now();

export default (name = DATE_NOW, func = dateNow) => () => next => (action) => {
  next({ [name]: func(), ...action });
};
