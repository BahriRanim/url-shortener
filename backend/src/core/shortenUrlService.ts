import { IUrlShortenerService } from "../ports/IUrlShortenerService";

export class UrlShortenerService implements IUrlShortenerService {
  generateShortCode(url: string): string {
    // Simple example using a random string (not collision-resistant)
    return Math.random().toString(36).substring(2, 8);
  }
}
