import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInBottom } from "./FadeInBottom";

export default function SelfIntro() {
  return (
    <FadeInBottom>
      <div className="mx-10 my-10" id="self-introduce">
        <h2 className="text-xl m-2 font-bold">自己紹介</h2>
        <div className="flex flex-col items-center sm:flex-row gap-4 m-2">
          <Avatar className="bg-primary h-1/6 w-1/6">
            <AvatarImage src="/Fresh Folk - Avatar.png" alt="@shadcn" />
            <AvatarFallback>AVATAR</AvatarFallback>
          </Avatar>
          <p className="block sm:w-2/3">
            私は約１０年間官公庁で勤め、企画政策や行政計画策定の業務に従事してきました。
            <br />
            また、それと並行して２年ほど前から経済産業省の情報処理技術者試験を受け、「基本情報技術者試験（レベル２）」「応用情報技術者試験（レベル３）」「情報処理安全確保支援士試験（レベル４）」に合格しました。
            <br />
            その後WEBエンジニアを志望し、HTML、CSS、JavaScriptから始め、React、Next.js、Tailwind
            CSSなどのモダンな技術による、Webアプリケーションの自己開発に取り組んでいます。
            <br />
            バックエンドについては現在学習中です。
          </p>
        </div>
      </div>
    </FadeInBottom>
  );
}
