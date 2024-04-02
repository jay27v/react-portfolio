"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import anime from "../public/animeJay.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jays Portfolio</title>
        <meta name="description" content="Made by AlchemicalCoder" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-grey-900">
        <section className="min-h-screen">
          <nav className="bg-gradient-to-r bg-cover from-cyan-500 to-emerald-500 py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons">Hi welcome to my site</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer 3xl size-10"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-2 roudned-md ml-8 size-10 drop-shadow-lg"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-6xl py-2 text-emerald-500 font-medium drop-shadow-lg md:text-6xl">
              Jamie Vaughan
            </h2>
            <h3 className="text-3xl py-2 md:text-3xl">
              Website developer/designer
            </h3>
            <p className="text-2xl py-5 leading-8 text-grey-800 md:text-xl">
              Looking to establish or enhance your online presence? Look no
              further! I specialize in providing top-notch website development
              services tailored to your unique needs. Whether your a small
              business owner, an entrepreneur, or an organization aiming to
              reach a wider audience, I can craft visually appealing,
              user-friendly websites that reflect your brand identity and drive
              results. From custom designs to responsive layouts, Ill ensure
              your website stands out in the digital landscape. Lets collaborate
              to bring your vision to life and propel your online growth
              forward!
            </p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-5xl flex justify-center gap-16 py-3 text-grey-60 drop-shadow-lg">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden drop-shadow-xl md:h-96 md:w-96">
            <Image
              src={anime}
              layout="fixed"
              objectFit="center"
              alt="an image of a digital version of me"
            />
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Experience and field of expertise</h3>
            <p className="text-2xl py-2 leading-8 text-grey-800">
              I have been working as a web developer for a few years. I have
              worked with a wide variety of languages and frameworks, including:
            </p>
            <ul className="py-2">
              <span className="text-emerald-500">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL and more!</li>
              </span>{" "}
            </ul>

            <p className="text-2xl py-1 leading-8 text-grey-800">
              I've undertaken various freelance website development projects,
              each presenting its own set of challenges and opportunities for
              growth. From crafting sleek landing pages for startups to building
              comprehensive e-commerce platforms for established businesses, my
              experience spans across diverse industries and requirements. I've
              collaborated with clients to create dynamic websites that not only
              showcase their products or services but also engage and convert
              visitors effectively. My portfolio encompasses a range of
              projects, demonstrating my proficiency in frontend and backend
              development, as well as my ability to adapt to evolving
              technological trends.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                objectFit="center"
                className="mx-auto"
                alt="a picture of some 3d design"
              />
              <h3 className="text-3xl pt-8 pb-2">Designs</h3>
              <p className="py-2 text-2xl">Creating designs for your needs</p>
              <h3 className="py-2 text-2xl">The various software used:</h3>
              <ul>
                <span className="text-emerald-500 py-1 text-2xl">
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Illustrator</li>
                </span>{" "}
              </ul>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                objectFit="center"
                className="mx-auto"
                alt="a picture of some 3d design"
              />
              <h3 className="text-3xl pt-8 pb-2">Designs</h3>
              <p className="py-2 text-2xl">Creating designs for your needs</p>
              <h3 className="py-2 text-2xl">The various software used:</h3>
              <ul>
                <span className="text-emerald-500 py-1 text-2xl">
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Illustrator</li>
                </span>{" "}
              </ul>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                width={100}
                height={100}
                objectFit="center"
                className="mx-auto"
                alt="a picture of some 3d design"
              />
              <h3 className="text-3xl pt-8 pb-2">Designs</h3>
              <p className="py-2 text-2xl">Creating designs for your needs</p>
              <h3 className="py-2 text-2xl">The various software used:</h3>
              <ul>
                <span className="text-emerald-500 py-1 text-2xl">
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Illustrator</li>
                </span>{" "}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center lg:flex gap-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-2xl py-1 leading-8 text-grey-800">
              change this paragraph to include my portfolio
              experience!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                width="100"
                height="100"
                className="mx-auto rounded-lg object-cover"
                alt="a picture of some 3d design"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                width="100"
                height="100"
                className="mx-auto rounded-lg object-cover"
                alt="a picture of some 3d design"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                width="100"
                height="100"
                className="mx-auto rounded-lg object-cover"
                alt="a picture of some 3d design"
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
