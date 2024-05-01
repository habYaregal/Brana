import { useEffect,useState } from "react";
import "../main.css";
function RecentContent() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
      {datas.map((feature) => (
        <li key={feature.genre} className="relative flex flex-col sm:flex-row xl:flex-row items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className={`mb-1 block text-sm leading-6 titles`}>
                {feature.genre}
              </span>
              {feature.title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>{feature.content}</p>
            </div>
            <a
              href=""
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
            >
              ሙሉውን ያንብቡ
              <span className="sr-only">{feature.content}</span>
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          <img
            src={feature.cover}
            alt=""
            className="mb-6 mr-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[16rem]"
            width="1216"
            height="640"
          />
        </li>
      ))}
    </ul>
  );
}
export default RecentContent;
