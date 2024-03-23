import { BASE_URL } from "./constants";
import useAPI from "./utils/useAPI";
import ArticleCard from "./components/ArticleCard";
import { IArticleItem } from "./types";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const { data, isLoading, error } = useAPI(
    `${BASE_URL}/assignment/articles`
  ) as unknown as { data: IArticleItem[]; isLoading: boolean; error: object };

  if (isLoading) {
    return <Loader />;
  }

  if (!data && error) {
    return <Error message="Failed to load the articles!" />;
  }

  return (
    <div className="bg-slate-100 h-full container mx-auto">
      <h1 className="text-3xl font-bold p-8 text-center">PatientSky Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data?.map(({ id, title, summary }) => (
          <ArticleCard key={id} id={id} title={title} summary={summary} />
        ))}
      </div>
    </div>
  );
}

export default App;
