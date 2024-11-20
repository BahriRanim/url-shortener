import express from 'express';
import { IUrlShortenerService } from '../ports/IUrlShortenerService';
import { UrlShortenerService } from '../core/shortenUrlService';

const router = express.Router();

const urlShortenerService: IUrlShortenerService = new UrlShortenerService();

// Shorten URL endpoint
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortCode = urlShortenerService.generateShortCode(longUrl);

  res.status(201).json({ shortCode });
});

export default router;
