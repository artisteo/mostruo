import Entity from "../../base/entity";

class Question extends Entity {
  constructor(public content: string) {
    super();
  }
}

export default Question;
