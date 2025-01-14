const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const QUALITY = 75;
const MAX_WIDTH = 1920;
const TEMP_DIR = path.join(process.cwd(), "temp_optimized");
const FORMATS = ["webp", "avif"];

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
    const filename = path.basename(inputPath, path.extname(inputPath));

    // Create relative path structure in temp directory
    const relativePath = path.relative(
      path.join(process.cwd(), "public", "images"),
      path.dirname(inputPath)
    );
    const outputDir = path.join(TEMP_DIR, relativePath);
    await ensureDirectoryExists(outputDir);

    // Generate responsive sizes
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    const optimizationPromises = [];

    // Only process sizes smaller than original
    const applicableSizes = sizes.filter(size => size <= metadata.width);

    // Process each format and size
    for (const format of FORMATS) {
      for (const width of applicableSizes) {
        const resizedImage = image.clone().resize(width, null, {
          withoutEnlargement: true,
          fit: "inside",
        });

        const outputPath = path.join(
          outputDir,
          `${filename}-${width}.${format}`
        );

        if (format === "webp") {
          optimizationPromises.push(
            resizedImage
              .webp({ quality: QUALITY })
              .toFile(outputPath)
          );
        } else if (format === "avif") {
          optimizationPromises.push(
            resizedImage
              .avif({ quality: QUALITY })
              .toFile(outputPath)
          );
        }
      }
    }

    // Generate placeholder blur
    const placeholderPath = path.join(outputDir, `${filename}-placeholder.webp`);
    optimizationPromises.push(
      image
        .clone()
        .resize(20, null, { withoutEnlargement: true })
        .blur(10)
        .webp({ quality: 20 })
        .toFile(placeholderPath)
    );

    await Promise.all(optimizationPromises);
    console.log(`✓ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (
      entry.isFile() &&
      /\.(jpg|jpeg|png|webp)$/i.test(entry.name)
    ) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  const imagesDir = path.join(process.cwd(), "public", "images");

  console.log("🎨 Starting image optimization...");
  console.log("📁 Source directory:", imagesDir);
  console.log("📁 Output directory:", TEMP_DIR);
  console.log("⚙️ Settings:");
  console.log(`   - Quality: ${QUALITY}%`);
  console.log(`   - Max width: ${MAX_WIDTH}px`);
  console.log(`   - Formats: ${FORMATS.join(", ")}`);

  // Create temp directory
  await ensureDirectoryExists(TEMP_DIR);

  try {
    await processDirectory(imagesDir);
    console.log("\n✨ Image optimization complete!");
    console.log("📝 Next steps:");
    console.log("1. Review optimized images in the temp_optimized directory");
    console.log("2. Copy the optimized images to replace the originals if satisfied");
    console.log("3. Update your code to use the new image formats");
  } catch (error) {
    console.error("❌ Error during optimization:", error);
    process.exit(1);
  }
}

main().catch(console.error);
