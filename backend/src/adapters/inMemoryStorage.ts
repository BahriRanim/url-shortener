import { IStorageRepository } from "../ports/IStorageRepository";

export class InMemoryStorage implements IStorageRepository {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map();
  }

  async saveUrl(shortCode: string, originalUrl: string): Promise<void> {
    this.storage.set(shortCode, originalUrl);
  }

  async getUrl(shortCode: string): Promise<string | null> {
    return this.storage.get(shortCode) || null;
  }
}
