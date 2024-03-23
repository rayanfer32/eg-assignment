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
    <div className="p-4 bg-white h-72 rounded-sm flex flex-col justify-between shadow-lg hover:scale-105 transition">
      <div className="flex flex-col gap-2">
        <a href={`/article/${id}`} className="text-xl font-bold">
          {title}
        </a>
        <p>{summary}</p>
      </div>
      <div className="flex justify-end mx-2">
        <a
          className="bg-blue-200 p-3 rounded-full w-fit shadow-md hover:-m-1 hover:p-4 transition-all"
          href={`/article/${id}`}
        >
          Read more {">"}
        </a>
      </div>
    </div>
  );
}
