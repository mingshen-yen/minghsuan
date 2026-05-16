export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex gap-8 justify-center items-center">
          <a
            href="https://github.com/mingshen-yen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/github.svg" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ming-hsuan-yen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/linkedin.svg" className="w-5 h-5" />
          </a>
          <a
            href="http://www.youtube.com/@mingshenworld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/youtube.svg" className="w-6 h-6" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold tracking-wider text-slate-300">
            <span className="not-italic mr-1">✦</span>MINGHSUAN
            <span className="not-italic ml-1">✦</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
