export const Footer = () => {
  return (
    <footer className="relative text-black py-12">
      <div className="absolute inset-0 retro-scanlines" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-wider text-white">
              MINGHSUAN<span className="not-italic ml-1">✦</span>
            </span>
          </div>
          <p className="font-body text-xs text-slate-300">
            © 2026 MINGHSUAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
