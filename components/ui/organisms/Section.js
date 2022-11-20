import SectionTitle from '../molecules/SectionTitle';

export default function Section({ black, children, title }) {
  return (
    <section className={`px-4 py-8 mb-8 md:px-10 lg:px-16 max-w-7xl mx-auto`}>
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
}
