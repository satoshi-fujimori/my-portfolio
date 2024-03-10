import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainPict from "@/components/MainPict";
import SelfIntro from "@/components/SelfIntro";
import Skill from "@/components/Skill";
import WorkList from "@/components/WorkList";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <MainPict />
        <SelfIntro />
        <WorkList />
        <Skill />
        <Footer />
      </div>
    </>
  );
}
