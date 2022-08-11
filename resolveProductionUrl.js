const previewSecret = 'SECRET_PREVIEW_KEY'; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = process.env.SANITY_STUDIO_PREVIEW_URL;

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
