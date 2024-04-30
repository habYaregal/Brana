import prof1 from "../../../assets/Images/profile_one.jpg";
import prof2 from "../../../assets/Images/profile_two.jpg";
import prof3 from "../../../assets/Images/profile_three.jpg";
import prof4 from "../../../assets/Images/profile_four.jpg";
import "../Admin.css";
function FullUsers() {
  const tableItems = [
    {
      id: 1,
      avatar: prof1,
      name: "አበበ ከበደ",
      email: "abekebe@example.com",
      type: "ክፍያ",
      hour: "10/በሳምንት",
    },
    {
      id: 2,
      avatar: prof2,
      name: "አደመ ጨቅሌ",
      email: "ademe@example.com",
      type: "ክፍያ",
      hour: "13/በሳምንት",
    },
    {
      id: 3,
      avatar: prof3,
      name: "ቅድስት ማማዬ",
      email: "kidumamaye@example.com",
      type: "ነፃ",
      hour: "9/በሳምንት",
    },
    {
      id: 4,
      avatar: prof4,
      name: "ፋኑኤል አልማው",
      email: "fanustop@example.com",
      type: "ክፍያ",
      hour: "12/በሳምንት",
    },
    {
      id: 5,
      avatar: prof1,
      name: "አበበ ከበደ",
      email: "abekebe@example.com",
      type: "ክፍያ",
      hour: "10/በሳምንት",
    },
    {
      id: 6,
      avatar: prof2,
      name: "አደመ ጨቅሌ",
      email: "ademe@example.com",
      type: "ክፍያ",
      hour: "13/በሳምንት",
    },
    {
      id: 7,
      avatar: prof3,
      name: "ቅድስት ማማዬ",
      email: "kidumamaye@example.com",
      type: "ነፃ",
      hour: "9/በሳምንት",
    },
    {
      id: 8,
      avatar: prof4,
      name: "ፋኑኤል አልማው",
      email: "fanustop@example.com",
      type: "ክፍያ",
      hour: "12/በሳምንት",
    },
    {
      id: 9,
      avatar: prof3,
      name: "ቅድስት ማማዬ",
      email: "kidumamaye@example.com",
      type: "ነፃ",
      hour: "9/በሳምንት",
    },
    {
      id: 10,
      avatar: prof4,
      name: "ፋኑኤል አልማው",
      email: "fanustop@example.com",
      type: "ክፍያ",
      hour: "12/በሳምንት",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 mt-2">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            ተጠቃሚዎች
          </h3>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ተ.ቁ</th>
              <th className="py-3 px-6">ስም</th>
              <th className="py-3 px-6">ኢሜይል</th>
              <th className="py-3 px-6">የአባልነት አይነት</th>
              <th className="py-3 px-6">ሰዓት</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src={item.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.type == "ክፍያ"
                        ? "text-green-600 bg-green-50"
                        : "text-red-600 bg-red-50"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.hour}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default FullUsers;
