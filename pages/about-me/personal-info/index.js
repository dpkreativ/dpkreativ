import React from 'react';
import PageLayout from '../../../components/Layouts/PageLayout';

export default function AboutMe() {
  return (
    <div>
      <PageLayout activeIndex={2}>
        <section className="w-full h-full flex">
          {/* Sidebar */}
          <section className="w-full max-w-xs lg:border-r border-line h-full"></section>
          {/* Page Content */}
          <section className="grid grid-cols-2 h-full w-full">
            <article className="lg:border-r border-line h-full"></article>
            <article></article>
          </section>
        </section>
      </PageLayout>
    </div>
  );
}
