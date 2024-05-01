import { useState, useEffect } from "react";
import "../main.css";
function ScienceBlog() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/science/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <aside
        aria-label="Recent Posts"
        class="mx-auto mt-10 max-w-screen-xl py-10"
      >
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              ምን ማንበብ ይፈልጋሉ
            </h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              ወደ ብራና ዓለም ሲቀላቀሉ የሚፈልጉትን ፅሑፍ በአመቸዎት ስዓት በሚመችዎ ቦታ የሚያነቡበትን እድል ይፈጥራሉ
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* Map over the articles array and render each article */}
            {datas.map((article) => (
              <article key={article.id} class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 ">
                <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img
                    src={article.cover}
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">{article.date_created}</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="transition duration-100">{article.title}</a>
                  </h2>
                  <p class="text-gray-500">{article.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default ScienceBlog;
