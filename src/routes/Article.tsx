import { BASE_URL } from "../constants";
import { useParams } from "react-router-dom";
import useAPI from "../utils/useAPI";
import ArticleFullView from "../components/ArticleFullView";
import { IArticle } from "../types";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Article() {
  const routerParams = useParams();

  const {
    data: articleData,
    isLoading,
    error,
  } = useAPI(
    `${BASE_URL}/assignment/articles/${routerParams.id}`
  ) as unknown as {
    data: IArticle;
    isLoading: boolean;
    error: unknown;
  };

  if (isLoading) {
    return <Loader message="Loading Article..." />;
  }

  if (!articleData && error) {
    return <Error message="Failed to load the article!" />;
  }

  return (
    <div className="md:p-24 py-8 p-5 w-full h-full min-h-screen bg-slate-100">
      <button
        className="mb-4 bg-white p-3 rounded-lg w-fit shadow-md hover:bg-blue-200 hover:scale-110 transition-all"
        onClick={() => window.history.back()}
      >
        &larr; Back
      </button>
      <ArticleFullView
        id={articleData?.id}
        title={articleData?.title}
        summary={articleData?.summary}
        fullText={articleData?.fullText}
      />
    </div>
  );
}
