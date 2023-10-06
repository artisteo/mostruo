import type { Entity, EntityRepository } from "../modules/base";
import { database } from "./firebase-config";

class FirebaseRepository<T extends Entity> implements EntityRepository<T> {
  constructor(protected collection: string) {}
  async save(entity: T): Promise<void> {
    await database
      .collection(this.collection)
      .doc(entity.id)
      .set(entity.serialize());
  }
  async getAll(): Promise<T[]> {
    const collectionRef = database.collection(this.collection);
    const snapshot = await collectionRef.get();
    const results = [];
    snapshot.forEach((doc) => results.push(doc.data()));
    return results;
  }
}

export default FirebaseRepository;
