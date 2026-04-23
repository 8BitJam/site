import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaDollarSign, FaGift, FaTrophy } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import Hero from "@/components/home/Hero";
import Card from "@/components/home/Card";
import Header from "@/components/home/Header";
import Btn from "@/components/ui/Btn";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero />
      <div className="flex flex-col gap-y-10 py-15">
        <Header
          title="FOR HIGH SCHOOLERS, BY HIGH SCHOOLERS"
          description="We are a team of 6 high school students from Northern Virginia hosting a
        hackathon for 50 teens!"
        />
        <div className="flex gap-5 flex-wrap">
          <Card
            title="ANYTHING GAME DEV"
            description="It doesn't matter if you use Unity, Godot, web, or even Scratch, as long as it's game dev related!"
          >
            <IoGameController size={30} />
          </Card>
          <Card
            title="COMPLETELY FREE"
            description="You don't need to pay anything to participate, thanks to our amazing sponsors below!"
          >
            <FaDollarSign size={30} />
          </Card>
          <Card
            title="FREE STUFF"
            description="Register and show up to get free swag, stickers, and food, and earn more prizes by winning!"
          >
            <FaGift size={25} />
          </Card>
          <Card
            title="MINI-GAMES AND SIDEQUESTS"
            description="Take part in fun mini-games and challenging sidequests to unlock additional prizes!"
          >
            <MdLeaderboard size={25} />
          </Card>
          <Card
            title="DIVERSE CATEGORIES"
            description="Enter your game for best overall, education, simulation, creative, graphics, or story category!"
          >
            <FaTrophy size={25} />
          </Card>
          <Card
            title="HAVE FUN"
            description="Spend 20 memorable hours with your friends creating projects, playing games, and having fun!"
          >
            <LuPartyPopper size={25} />
          </Card>
        </div>
        {!session && (
          <>
            <Header
              title="CREATE AN ACCOUNT NOW"
              description="Sign up for an account on the 8-Bit Jam website now by clicking on the link below! You can manage and customize your registration in the future on the dashboard page as well."
            />
            <div className="flex justify-center">
              <Btn href="/signin" text="SIGN UP" primary />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
