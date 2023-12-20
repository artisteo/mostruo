"use client";
import type User from "../user";
import Visit from "../visit";

const saveUserToLocalStorage = (user: User): void => {
  try {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem("user", jsonUser);
  } catch (e) {
    // eslint-disable-next-line no-console -- debug
    console.error(e);
  }
};

const saveVisit = (visit: Visit): void => {
  // eslint-disable-next-line no-console -- debug
  console.log("visit saved");
  // eslint-disable-next-line no-console -- debug
  console.log(visit);
};

export const createVisit = (user: User): User => {
  user.lastVisit = new Date();
  user.visitsCount = user.visitsCount + 1;
  saveUserToLocalStorage(user);
  saveVisit(new Visit(user));
  return user;
};
