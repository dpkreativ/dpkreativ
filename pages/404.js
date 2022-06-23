import Link from 'next/link';
import PageLayout from '../components/Templates/PageLayout';
import Button from '../components/UI/atoms/Button';
import { Lost } from '../components/UI/atoms/Icons';

const NotFound = () => {
  return (
    <div>
      <PageLayout>
        <section className="p-5 my-20 md:my-32 mx-auto w-full max-w-5xl grid items-center gap-20 md:grid-cols-2 text-primary-04">
          <article className="w-full">
            <div className="w-40 md:w-72 mx-auto md:mx-0">
              <Lost />
            </div>
          </article>
          <article className="flex flex-col space-y-5 h-max text-center md:text-left">
            <h1 className="text-6xl text-accent-02 md:text-secondary-03">
              404
            </h1>
            <h3 className="w-3/4 mx-auto md:w-full">
              Oops! This page is still in development. Please check again later.
              Thanks!
            </h3>
            <Link href="/">
              <a>
                <Button>back-to-home</Button>
              </a>
            </Link>
          </article>
        </section>
      </PageLayout>
    </div>
  );
};

export default NotFound;
