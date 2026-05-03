import BackButton from "@/components/back-button";

export default function FloatingBackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="sticky top-24 z-40 mb-8 w-fit self-start md:top-28">
      <BackButton href={href} label={label} />
    </div>
  );
}
