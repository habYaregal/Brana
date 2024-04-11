import { Link } from 'react-router-dom';

function CardBlog() {
  // Define an array of objects for each article
  const articles = [
    {
      id: 1,
      date: "ሚያዝያ 2, 2016",
      title: "የሱሰኛ የአንድ ቀን ግለ-ታሪክ",
      imageSrc: "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
    },
    {
      id: 2,
      date: "መጋቢት 12, 2016",
      title: "ከውጥንቅጥ ማግስት",
      imageSrc: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
    },
    {
      id: 3,
      date: "ጥር 19, 2016",
      title: "የሞት ቅኔ",
      imageSrc: "https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
    },
    {
      id: 4,
      date: "የካቲት 9, 2016",
      title: "አስታማሚው",
      imageSrc: "https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
    }
  ];

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
            {articles.map((article) => (
              <article key={article.id} class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img
                    src={article.imageSrc}
                    loading="lazy"
                    alt=""
                    class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                  />
                </a>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">{article.date}</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">{article.title}</a>
                  </h2>

                  <p class="text-gray-500">{article.description}</p>

                  <div>
                    <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">ሙሉውን ያንብቡ</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default CardBlog;
