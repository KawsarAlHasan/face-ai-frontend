interface PolicyPageProps {
  content: string;
  title: string;
  subtitle: string;
}
export default function PolicyLayout({
  content,
  title,
  subtitle,
}: PolicyPageProps) {
  return (
    <div className="min-h-[calc(100vh-80px)]  text-white">
      <div className="container  py-12 lg:py-20">
        <div className="mb-10 text-center">
          <h1 className="section-title text-white">{title}</h1>
          <p className="section-subtitle mt-2">{subtitle}</p>
        </div>

        <div className="rounded-xl shadow-xl">
          <div
            className="prose prose-invert max-w-none leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
