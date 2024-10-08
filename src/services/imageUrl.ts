import placeholder from "@/assets/no-image-placeholder.webp";
import darkPlaceholder from "@/assets/no-image-placeholder-dark.webp";

export default function getCroppedImage(url: string, theme?: string) {
  if (url === null) {
    return theme === "dark" ? darkPlaceholder : placeholder;
  }
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
