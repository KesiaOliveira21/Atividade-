export function isEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

export function isNotEmpty(value) {
  return value && value.trim().length > 0;
}

// outras validações que quiser adicionar
