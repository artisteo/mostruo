"use client";
import User from "../user";

const getUserFromLocalStorage = (): User | null => {
  try {
    const jsonUser = localStorage.getItem("user");
    if (jsonUser) {
      const user: User = JSON.parse(jsonUser) as User;
      return user;
    }
  } catch (e) {
    // eslint-disable-next-line no-console -- debug
    console.error(e);
  }
  return null;
};

export const getInitialUser = (): User => {
  const extistingUser = getUserFromLocalStorage();
  if (extistingUser) return extistingUser;
  return new User();
};
