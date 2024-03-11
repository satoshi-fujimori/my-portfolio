import Image from "next/image";
import CSS3_logo from "../../public/CSS3_logo.svg";
import HTML5_Logo from "../../public/HTML5_Logo.svg";
import js from "../../public/js.svg";
import next_light from "../../public/next_light.svg";
import tslogo from "../../public/ts_logo.svg";
import reactlogo from "../../public/react-logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";
import SkillCard from "./SkillCard";
import { FadeInBottom } from "./FadeInBottom";

export type LogoProps = { icon: StaticImport; name: string; comment: string };
export const logos: LogoProps[] = [
  {
    icon: CSS3_logo,
    name: "css",
    comment:
      "デザインに忠実に、BEMを使った設計思想でスタイル付けができます。レスポンシブデザインにも対応",
  },
  {
    icon: HTML5_Logo,
    name: "html",
    comment: "セマンティックコード、構造化マークアップができます。",
  },
  {
    icon: js,
    name: "javascript",
    comment:
      "ウェブページやウェブアプリケーションの動的な挙動やインタラクティブな要素を実装することができます。",
  },
  {
    icon: reactlogo,
    name: "react",
    comment:
      "HooksやRouterの扱いはもちろんのこと、Next.jsやTailwindCSSなどのフレームワークを使った個人開発を続けています。",
  },
  {
    icon: next_light,
    name: "next.js",
    comment:
      "SSR、SSG、ファイルベースのルーティング（App Router）によるモダンなウェブアプリケーションを構築できます。",
  },
  {
    icon: tslogo,
    name: "typescript",
    comment:
      "個人開発ではすべてTypescriptを用いて型安全なアプリケーションを作成しいます。",
  },
];

export default function Skill() {
  return (
    <FadeInBottom>
      <div className="mx-10 my-10" id="skill">
        <h2 className="text-xl m-2 font-bold">スキル</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between m-2">
          {logos.map((logo, i) => (
            <SkillCard logo={logo} index={i} key={i} />
          ))}
        </div>
      </div>
    </FadeInBottom>
  );
}
