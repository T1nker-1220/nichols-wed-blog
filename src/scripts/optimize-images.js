const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const QUALITY = 75;
const MAX_WIDTH = 1920;
const TEMP_DIR = path.join(process.cwd(), "temp_optimized");

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function optimizeImage(inputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Create relative path structure in temp directory
    const relativePath = path.relative(
      path.join(process.cwd(), "public", "images"),
      inputPath
    );
    const tempOutputPath = path.join(TEMP_DIR, relativePath);
    await ensureDirectoryExists(path.dirname(tempOutputPath));

    // Only resize if image is larger than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    // Save optimized version to temp directory
    await image.webp({ quality: QUALITY }).toFile(tempOutputPath);
    console.log(`Optimized: ${inputPath} -> ${tempOutputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  const imagesDir = path.join(process.cwd(), "public", "images");

  // Create temp directory
  await ensureDirectoryExists(TEMP_DIR);

  console.log("Starting image optimization...");
  console.log("Optimized images will be saved to:", TEMP_DIR);

  await processDirectory(imagesDir);
  console.log(
    "Image optimization complete! Optimized images are in the temp_optimized directory."
  );
  console.log(
    "You can now manually copy the optimized images from the temp directory to replace the originals."
  );
}

main().catch(console.error);
