import { IUrlShortenerService } from '../ports/IUrlShortenerService';

export class UrlShortenerService implements IUrlShortenerService {
  generateShortCode(url: string): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
