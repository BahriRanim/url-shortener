export interface IStorageRepository {
  saveUrl(shortCode: string, originalUrl: string): Promise<void>;
  getUrl(shortCode: string): Promise<string | null>;
}
