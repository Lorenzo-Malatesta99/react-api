import React, { useState } from "react";
import BlogForm from "./BlogForm";
import Card from "./card";
import { posts } from "./Data/posts";

const Main = () => {
  const [articles, setArticles] = useState(posts);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const deleteArticle = (index) => {
    const newArticles = articles.filter((_, i) => i !== index);
    setArticles(newArticles);
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-4"> Nuovo articolo:</h1>
      <BlogForm onAddArticle={addArticle} />
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-12 col-md-6 col-lg-4 my-5" key={index}>
            <Card
              index={index}
              title={article.title}
              content={article.content}
              image={article.image}
              tags={article.tags}
              category={article.category}
              isPublished={article.isPublished}
              onDelete={deleteArticle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
