import Head from 'next/head';
import Image from 'next/image';
import { ArrowDown } from '../components/assets/Icons';
import HomeLayout from '../components/layouts/HomeLayout';
import Section from '../components/ui/organisms/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divine Orji - dpkreativ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dpkreativ.ico" />
      </Head>

      {/* Home Content */}
      <HomeLayout>
        {/* Hero Section */}
        <Section>
          <article className="flex justify-between items-end relative">
            <div className="text-5xl leading-normal font-semibold">
              Hi, I’m Divine — a software engineer who enjoys creating
              applications that are <span className="gray">fast</span>,{' '}
              <span className="gray">robust</span>, and{' '}
              <span className="gray">user-friendly</span>.
            </div>
            <div className="absolute right-0 bottom-24 animate-bounce">
              <ArrowDown />
            </div>
          </article>
        </Section>

        {/* Bio Section */}
        <Section title={`Bio`}>
          <article>
            <div className="font-semibold text-4xl gray mb-2">
              <span className="dance">circa </span>'97
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-clip">
              <Image
                src={`/images/profile.jpg`}
                alt={`Divine Orji`}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </article>
          <article className="text-2xl leading-normal grid gap-6 pt-6">
            <div>
              My dad owned a cybercafe and a printing business, so I had access
              to computers from childhood.
            </div>
            <div>
              I played around with Mavis Beacon, significantly improving my
              typing speed over the years, and with time I developed an interest
              in graphic design.
            </div>
          </article>
          <article className="text-2xl leading-normal grid gap-6 pt-6">
            <div>
              <span className="font-semibold">In 2019,</span> I enrolled in a
              tech bootcamp to learn frontend development, and since then I’ve
              worked on small and large applications, websites and APIs.
            </div>
            <div>
              I like to <span className="gray italic">think strategically</span>{' '}
              and solve problems in{' '}
              <span className="gray italic">small, iterative steps</span>, and I
              love <span className="gray italic">pairing up</span> with smart
              people to build great things.
            </div>
            <div>
              I also love <span className="gray italic">sharing knowledge</span>{' '}
              as part of a <span className="gray italic">community</span>, and I
              am an active member of multiple tech communities such as GDG Aba,
              GDSC MOUAU, and Polygon Guild Abuja.
            </div>
          </article>
        </Section>
      </HomeLayout>
    </div>
  );
}
