import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Jays Portfolio</title>
        <meta name="description" content="Made by AlchemicalCoder" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Hello everybody</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer 2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 roudned-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Jamie Vaughan
            </h2>
            <h3 className="text-2xl py-2">Website developer/designer</h3>
            <p className="text-md py-5 leading-8 text-grey-800">
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-grey-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={deved}
              layout="fixed"
              objectFit="center"
              alt="an image of a man"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Experience and field of expertise</h3>
            <p className="text-md py-2 leading-8 text-grey-800">
              I have been working as a web developer for over 10 years. I have
              worked with a wide variety of languages and frameworks, including
              <span className="text-emerald-500">
                HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB,
                Mongoose, Express.js, Bootstrap,
              </span>{" "}
              and more.
            </p>
            <p className="text-md py-5 leading-8 text-grey-800">
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
            <div>
              <Image
                src={design}
                width={100}
                height={100}
                alt="a picture of some 3d design"
              />
              <h3>Designs</h3>
              <p>creating designs for your needs</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
