import Image from "next/image";

export default function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/branding/bamboostic-logo.jpg"
      alt="BambooStic - Nabattan Springs Ltd"
      width={1600}
      height={630}
      priority={priority}
      className={`h-auto rounded-xl bg-white ${className}`}
    />
  );
}
