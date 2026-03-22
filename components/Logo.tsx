export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/fotky/litecamp-logo.png"
      alt="LITE camp logo"
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}
