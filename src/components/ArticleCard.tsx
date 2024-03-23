export default function ArticleCard({
  id,
  title,
  summary,
}: {
  id: number;
  title: string;
  summary: string;
}) {
  return (
    <div className="p-4 bg-blue-200 h-72 rounded-sm flex flex-col justify-between shadow-lg">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{summary}</p>
      </div>
      <div className="flex justify-end mx-2">
        <a
          className="bg-white p-3 rounded-full w-fit shadow-md hover:scale-110 transition-all"
          href={`/article/${id}`}
        >
          View More
        </a>
      </div>
    </div>
  );
}
