import "./Home.css";
import yemot_kine from "../../assets/Images/wifey.jpg";
import ethiopia from "../../assets/Images/Ethiopian_soldier.jpg";
import doctore from "../../assets/Images/The_doctor.jpg";
import { useEffect, useState } from "react";

function Recent() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  let baseUrl = "/";
  const imageCOver = '../../assets/Images/Ethiopian_soldier.jpg'
  return (
    <section className="py-16 pt-25">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            ሰሞንኛ ልጥፎች
          </h1>
          <p className="text-gray-600">በዚህ ሳምንት ተለጥፈው ተወዳጅነትን ያገኙ አዳዲስ ፅሑፎች</p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {datas.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={items.href}>
                <img
                src={items.cover}
                  loading="lazy"
                  alt={items.cover}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block link-text text-sm">
                    {items.date_created}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 title-text font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.content}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Recent;
