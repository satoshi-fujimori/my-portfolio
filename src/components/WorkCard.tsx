import Image from "next/image";
import { WorkContentsProps } from "./WorkList";
import { Card } from "./ui/card";

export default function WorkCard({
  workContent,
}: {
  workContent: WorkContentsProps;
}) {
  return (
    <Card className="p-2">
      <h3 className="font-title text-lg">{workContent.name}</h3>
      <Image src={workContent.logo} alt={workContent.name} width={200} />
      <p>{workContent.summary}</p>
    </Card>
  );
}
