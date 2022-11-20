import SectionTitle from '../molecules/SectionTitle';

export default function Section({ children, title }) {
  return (
    <section className="px-4 py-8 mb-8 md:p-10 lg:p-16">
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
}
