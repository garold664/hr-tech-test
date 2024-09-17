interface WidgetProps {
  title: string;
  icon: JSX.Element;
  value: number;
  subtitle: string;
  description?: string;
  footnote: string;
}
export default function Widget({
  title,
  icon,
  value,
  subtitle,
  description,
  footnote,
}: WidgetProps) {
  return (
    <article className="w-[264px]">
      <div className="bg-secondary h-32 p-3 rounded-lg flex flex-col items-center justify-center font-semibold">
        <h2 className="text-xl">{title}</h2>
        <div className="flex items-center gap-2 text-3xl">
          {icon}
          {value}
        </div>
        <p className="pt-1">{subtitle}</p>
        <p className="text-tertiary">{description}</p>
      </div>
      <footer className="font-medium text-tertiary text-center pt-3">
        {footnote}
      </footer>
    </article>
  );
}
