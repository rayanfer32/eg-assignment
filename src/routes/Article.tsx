import { BASE_URL } from "../constants";
import { Link, useParams } from "react-router-dom";
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
  } = useAPI<IArticle>(`${BASE_URL}/assignment/articles/${routerParams.id}`);

  if (isLoading) {
    return <Loader message="Loading Article..." />;
  }

  if (error) {
    return <Error message="Failed to load the article!" />;
  }

  return (
    <div className="md:p-24 py-8 p-5 w-full h-full min-h-screen bg-slate-100">
      <div className="mb-4">
        <Link
          className="bg-white p-3 rounded-lg w-fit shadow-md hover:bg-blue-200 hover:scale-110 transition-all"
          to={"/"}
        >
          &larr; Back
        </Link>
      </div>
      {articleData && (
        <ArticleFullView
          id={articleData.id}
          title={articleData.title}
          summary={articleData.summary}
          fullText={articleData.fullText}
        />
      )}
    </div>
  );
}
