import Entity from "../_base/entity";

export default class Question extends Entity {
  constructor(public content: string) {
    super();
  }
}
