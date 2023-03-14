import styles from "./index.module.css";
import Card from "../Components/Pricing/Card";
import logo from "../public/images/favicon.jpg";
import { pricing } from "Utils/data";
import CodeSnippet from "../Components/Code/CodeSnippet";
import Image from "next/image";

export default function Home() {
  const { data } = pricing;
  const code = `console.log("Hello, World!");`;
  const code2 = `print("Hello World!!")`;
  return (
    <>
      <nav className="flex justify-between py-3 shadow-lg">
        <div className="mx-auto w-[90%] max-w-[1440px]">
          <div className="flex items-center w-[30px] h-[25px]">
            <Image
              src={logo}
              alt="zazzani logo"
              className=" object-contain items-center flex"
            />
            <span className="logo font-bold text-2xl mb-1 ml-[-4px]">
              azzani
            </span>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <main>
          <div className="text-center">
            <h1 className="font-bold text-[30px] md:text-[36px] lg:text-[45px]">
              Ready to get <span className="amber-red">Started</span>
            </h1>
            <p className="text-gray-500 text-base">
              Choose a plan tailored to your needs
            </p>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto`}>
            {data.map((data, index) => (
              <Card
                id={data.id}
                key={data.id}
                price={data.price}
                title={data.title}
                features={data.features}
                billing={data.billing}
                button_text={data.button_text}
                popular={data.popular}
              />
            ))}
          </div>
          <div className="my-10">
            <h1 className="text-center font-bold text-[30px] md:text-[36px] lg:text-[45px]">
              Your Generated <span className="">Code</span>
            </h1>
            <CodeSnippet languageprop="python" codeprop={code2} />
          </div>
        </main>
      </div>
    </>
  );
}
