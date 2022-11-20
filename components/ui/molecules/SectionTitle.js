export default function SectionTitle({ title }) {
  return (
    <article className="mb-16">
      <div className="bg-slate-400 h-px w-52"></div>
      <div className="text-2xl uppercase my-4">{title}</div>
    </article>
  );
}
