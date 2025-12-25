export default function Background() {
  return (
    <svg
      className="bg-pattern"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dots"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
