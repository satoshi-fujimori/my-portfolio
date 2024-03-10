import Image from "next/image";
import { LogoProps } from "./Skill";
import { Card } from "./ui/card";
import classNames from "classnames";

export default function SkillCard({
  logo,
  index,
}: {
  logo: LogoProps;
  index: number;
}) {
  return (
    <Card
      className={classNames(
        "flex gap-2 items-center p-2 sm:flex-row",
        index % 2 !== 0 && "flex-row-reverse"
      )}
    >
      <Image
        src={logo.icon}
        width={80}
        height={80}
        alt={`logo${logo.name}`}
        className="hover:ring-2 hover:ring-primary h-20"
      />
      <p>{logo.comment}</p>
    </Card>
  );
}
