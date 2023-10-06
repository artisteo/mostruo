import { Entity } from "../base";

export default class Question extends Entity {
  constructor(public content: string) {
    super();
  }
}
