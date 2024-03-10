import { headerContents } from "./Header";

export default function Footer() {
  return (
    <footer className="px-10 sm:px-32 md:px-60 py-2 bg-slate-300 flex gap-x-2 text-xs justify-between">
      {headerContents.map((content) => (
        <a key={content.title} href={content.link}>
          {content.title}
        </a>
      ))}
    </footer>
  );
}
