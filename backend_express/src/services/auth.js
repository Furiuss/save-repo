import bcrypt from "bcryptjs";

export const createPasswordHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

export const checkPassword = (user, password) => {
  return bcrypt.compare(password, user.password);
};
