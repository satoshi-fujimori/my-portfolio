import Image from "next/image";
import ShoppingApp1 from "../../public/shoppingApp1.png";
import ShoppingApp2 from "../../public/shoppingApp2.png";
import OrderApp1 from "../../public/orderApp1.png";
import OrderApp2 from "../../public/orderApp2.png";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { FadeInBottom } from "./FadeInBottom";
import RecorderApp1 from "../../public/articleRecorder1.gif";
import RecorderApp2 from "../../public/articleRecorder2.gif";
import RecorderApp3 from "../../public/articleRecorder3.gif";
import BookStockApp1 from "../../public/book-stock-app1.gif";
import { Card } from "./ui/card";

export default function WorkList() {
  return (
    <FadeInBottom>
      <div className="mx-10 my-10" id="portfolio">
        <h2 className="text-xl m-2 font-bold">制作実績</h2>
        <p className="m-2w-full ">
          使用したライブラリ、フレームワーク:
          <br />
          React,Next.js,TailwindCSS,shadcn-UI
        </p>

        <div className="m-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-4">
          {/*app1*/}
          <Card className="p-2 w-full flex flex-col gap-4 mt-2">
            <h3 className="font-title font-bold text-xl">My Shopping App</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p>
                  買い物情報をTODOリスト的に管理するとともに、金額や個数などの実績をデータベースへ格納し、各種チャートとして表示
                </p>
                <p className="text-xs">（制作期間：土日を中心に１週間程度）</p>
                <div className="flex gap-x-4">
                  <a
                    href="https://202402-shopping-app.vercel.app"
                    className="font-title flex"
                  >
                    DEMO
                    <ArrowUpRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div className="flex gap-x-4 overflow-x-auto">
                <Image src={ShoppingApp1} alt="app1" width={300} />
                <Image src={ShoppingApp2} alt="app2" width={300} />
              </div>
            </div>
          </Card>

          {/*app2*/}
          <Card className="p-2 w-full flex flex-col gap-4 mt-2">
            <h3 className="font-title font-bold text-xl">Order App</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p>
                  モバイルオーダーアプリで、オーダー情報をデータベースへ格納し、各種チャートやテーブルとして表示
                </p>
                <p className="text-xs">（制作期間：土日を中心に１週間程度）</p>
                <div className="flex gap-x-4">
                  <a
                    href="https://order-app-lime.vercel.app"
                    className="font-title flex"
                  >
                    DEMO
                    <ArrowUpRightIcon className="w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 overflow-x-auto">
              <Image src={OrderApp1} alt="app1" width={300} />
              <Image src={OrderApp2} alt="app2" width={300} />
            </div>
          </Card>

          {/*app3*/}
          <Card className="p-2 w-full flex flex-col gap-4 mt-2">
            <h3 className="font-title font-bold text-xl">
              My Article Record App
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p>
                  QiitaAPIで記事を取得し、読んだ記録をデータベースに格納し管理。またQiitaの過去の各月のタグ別の記事数をチャート表示
                </p>
                <p className="text-xs">（制作期間：土日を中心に３日程度）</p>
              </div>
            </div>
            <div className="flex gap-x-4 overflow-x-auto md:overflow-x-scroll">
              <Image src={RecorderApp1} alt="app1" width={300} />
              <Image src={RecorderApp2} alt="app1" width={300} />
              <Image src={RecorderApp3} alt="app1" width={300} />
            </div>
          </Card>

          {/*app4*/}
          <Card className="p-2 w-full flex flex-col gap-4 mt-2">
            <h3 className="font-title font-bold text-xl">Book Stock App</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p>
                  GoogleBooksAPIで書籍情報を取得・表示し、カーリルAPIで現在地などから近い順に図書館情報及びその書籍の在庫状況を取得し、GoogleMapとテーブルで表示
                </p>
                <p className="text-xs">（制作期間：土日を中心に１日程度）</p>
              </div>
            </div>
            <div className="flex gap-x-4 overflow-x-auto md:overflow-visible">
              <Image src={BookStockApp1} alt="app1" width={300} />
            </div>
          </Card>
        </div>
      </div>
    </FadeInBottom>
  );
}
