import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  FaDollarSign,
  FaEnvelope,
  FaGift,
  FaTrophy,
  FaUserCircle,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { SiGoogleforms } from "react-icons/si";
import Hero from "@/components/home/Hero";
import Card from "@/components/home/Card";
import Header from "@/components/home/Header";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero />
      <div className="flex flex-col gap-y-10 py-15">
        <Header
          title="FOR HIGH SCHOOLERS, BY HIGH SCHOOLERS"
          description="We are a team of 4 high school students from Northern Virginia hosting a
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
            description="Enter your game for best overall, innovation, simulation, or style category!"
          >
            <FaTrophy size={25} />
          </Card>
          <Card
            title="HAVE FUN"
            description="Spend 10 memorable hours with your friends creating projects, playing games, and having fun!"
          >
            <LuPartyPopper size={25} />
          </Card>
        </div>
        {!session && (
          <>
            <Header
              title="HOW DO I PARTICIPATE?"
              description="Follow these 3 simple steps now to register and get ready before registration closes on 8/15 and you're all set!"
            />
            <div className="flex gap-5 flex-wrap">
              <Card
                title="1. SUBMIT REGISTRATION FORM"
                description="Read the form description carefully for event details, fill out the participant information, sign and upload the liability and medical forms, and you'll be registered!"
                link="https://forms.gle/HiKE87KTgp5hzoWU7"
                blank
              >
                <SiGoogleforms size={30} />
              </Card>
              <Card
                title="2. SIGN UP FOR AN ACCOUNT"
                description="Use the same email and name you used for the registration form to sign up for an account on this website, since you'll be using it to manage your participant account and project!"
                link="/signin"
              >
                <FaUserCircle size={30} />
              </Card>
              <Card
                title="3. CHECK YOUR EMAIL"
                description="Remember to regularly check the email you used to register and sign up for any instructions, updates, and reminders about 8-Bit Jam and your registration status!"
              >
                <FaEnvelope size={30} />
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
