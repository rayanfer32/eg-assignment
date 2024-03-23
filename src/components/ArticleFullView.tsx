export default function ArticleFullView({
  title,
  summary,
  fullText,
}: IArticle) {
  return (
    <div className="flex flex-col gap-4 container mx-auto justify-start items-center lg:w-1/2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl">{summary}</p>
      <p className="text-xl ">{fullText}</p>
    </div>
  );
}

interface IArticle {
  id: number;
  title: string;
  summary: string;
  fullText: string;
}
