import express from "express";
import { IStorageRepository } from "../ports/IStorageRepository";
import { IUrlShortenerService } from "../ports/IUrlShortenerService";
import { InMemoryStorage } from "./inMemoryStorage";
import { UrlShortenerService } from "../core/shortenUrlService";

const router = express.Router();

// Instantiate the adapters
const storage: IStorageRepository = new InMemoryStorage();
const urlShortenerService: IUrlShortenerService = new UrlShortenerService();

// Shorten URL endpoint
router.post("/shorten", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortCode = urlShortenerService.generateShortCode(url);
  await storage.saveUrl(shortCode, url);

  res.status(201).json({ shortCode });
});

// Redirect endpoint
router.get("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;

  const originalUrl = await storage.getUrl(shortCode);

  if (!originalUrl) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(originalUrl);
});

export default router;
