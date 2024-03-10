import {
  Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  PencilIcon,
  HandThumbUpIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const headerContents: {
  title: string;
  link: string;
  icon: ReactNode;
}[] = [
  { title: "ホーム", link: "#home", icon: <HomeIcon className="w-6" /> },
  {
    title: "自己紹介",
    link: "#self-introduce",
    icon: <UserCircleIcon className="w-6" />,
  },
  {
    title: "制作実績",
    link: "#portfolio",
    icon: <PencilIcon className="w-6" />,
  },
  {
    title: "スキル",
    link: "#skill",
    icon: <HandThumbUpIcon className="w-6" />,
  },
  {
    title: "お問い合わせ",
    link: "mailto:fuji02001458@gmail.com?subject=お問い合わせ",
    icon: <EnvelopeIcon className="w-6" />,
  },
];

const HeaderContents = () => {
  return (
    <>
      {headerContents.map((content) => (
        <a
          href={content.link}
          key={content.title}
          className="flex items-center gap-x-1"
        >
          {content.icon}
          {content.title}
        </a>
      ))}
    </>
  );
};

export default function Header() {
  return (
    <>
      <header className="sm:hidden flex justify-between m-2" id="home">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <button>
              <Bars3Icon className="w-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="top-0 mt-10 h-1/2 rounded-none">
            <div className="flex flex-col gap-6 p-2">
              <HeaderContents />
            </div>
          </DrawerContent>
        </Drawer>

        <h1 className="font-title text-xl">PORTFOLIO</h1>
      </header>
      <header className="hidden sm:flex justify-between items-center m-4">
        <h1 className="font-title text-3xl">PORTFOLIO</h1>
        <div className="flex gap-x-4 text-sm">
          <HeaderContents />
        </div>
      </header>
    </>
  );
}
