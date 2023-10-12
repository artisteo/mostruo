import type Entity from "../../base/entity";
import type EntityRepository from "../../base/repository";
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
    const results: T[] = [];
    snapshot.forEach((doc) => {
      const docData = doc.data() as T;
      return results.push(docData);
    });
    return results;
  }
}

export default FirebaseRepository;
