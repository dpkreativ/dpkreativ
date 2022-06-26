import React from 'react';
import PageLayout from '../../../../components/Layouts/PageLayout';

export default function AboutMe() {
  const displayNumbers = (qty) => {
    let numsArr = [];
    for (let i = 1; i <= qty; i++) {
      numsArr.push(i);
    }

    return numsArr;
  };

  return (
    <div>
      <PageLayout activeIndex={2}>
        <section className="w-full h-full flex">
          {/* Sidebar */}
          <section className="w-full max-w-xs lg:border-r border-line h-full"></section>
          {/* Page Content */}
          <section className="grid grid-cols-2 h-full w-full">
            <article className="lg:border-r border-line h-full py-4 px-8 text-secondary-01 flex space-x-5">
              <div className="text-right">
                {displayNumbers(10).map((el, idx) => (
                  <div key={idx}>
                    {el}, {idx}
                  </div>
                ))}
              </div>
              <div>
                <p>{`/*`}</p>
                <p>ABOUT ME:</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus similique impedit unde vero obcaecati deleniti
                  ratione commodi, eaque aspernatur assumenda! Deleniti beatae
                  sint obcaecati velit fugit consequuntur quae ducimus ea.
                </p>
                <p>{`/*`}</p>
              </div>
            </article>
            <article></article>
          </section>
        </section>
      </PageLayout>
    </div>
  );
}
