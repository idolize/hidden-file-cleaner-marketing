import Link from "next/link";
import fs from "fs/promises";
import Image from "next/image";

const Home = async () => {
  const marketing = await fs.readFile("content/marketing.json", "utf-8");
  const marketingData = JSON.parse(marketing);
  return (
    <div>
      <Image src="hiddenfilecleaner.png" alt="logo" width={512} height={512} />
      <h1 className="text-3xl font-bold underline">Home</h1>
      <p>{marketingData.title}! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
