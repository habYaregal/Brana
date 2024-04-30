import "../main.css";
import doctore from "../../../assets/Images/The_doctor.jpg";
import yemot_kine from "../../../assets/Images/wifey.jpg";
import susegna from "../../../assets/Images/susegna.jpg";
import wutinkit from "../../../assets/Images/wutinkit.jpg";
import ethiopia from "../../../assets/Images/Ethiopian_soldier.jpg";
function RecentContent() {
  const features = [
    {
      genre:'ሳይንሳዊ',
      title: 'አስታማሚው',
      description:
        'እየተገለማመጠ ሀኪሙን ተጠጋው። እምባ ያቆሩ አይኖቹን ጨመቅ፣ጨመቅ እያደረገ ወደ ጆሮው ጠጋ አለና፤ “ዶክተር የማሳክምበት አቅሙ የለኝም።',
      imageUrl: doctore,
      color: 'wheat',
    },
    {
      genre:'ፍቅር',
      title: 'የሞት ቅኔ',
      description:
        'ሚስቱን ማመን ካቆመ ቆየ ይህ ደግሞ የሆነው ስራ ተቀጥራ መስራት ከጀመረች ጀምሮ ነው ብሎ ነው የሚያስበው፡፡',
      imageUrl: yemot_kine,
      color: 'purple-500',
    },
    {
      genre:'ልብ አንጠልጣይ',
      title: 'የሱሰኛ የአንድ ቀን ግለ-ታሪክ',
      description:
        'ስለ ሱሰኞች መፃፍ ይፈልጋል፡፡ ስለ ጫታቸው፣ ሲጋራቸው፣ ሀሺሻቸው፣ ቁማራቸው፣ የወሲብ ረሀባቸው፣ ስካራቸው…',
      imageUrl: susegna,
      color: 'cyan-500',
    },
    {
      genre:'ምናባዊ',
      title: 'ከውጥንቅጥ ማግስት',
      description:
        'ጥቁሩ መነጽሬ የፀይኔን መቅበዝበዝ እንጅ የነፍስና የሥጋዬን ኀዘን መሸፈን አለመቻሉን ሁኔታዬ ያሳብቅ ነበር።',
      imageUrl: wutinkit,
      color: 'indigo-500',
    },
    {
      genre:'ታሪክ',
      title: 'ኢትዮጵያ ያመለጣት እድል',
      description:
        'ኮሎኔል መንገሻ ወልደ ሚካኤል ከአባቴ ጋር አንድ ኮርስ ሲሆኑ ያገኘኋቸውም አዲስ አበባ ነበር።',
      imageUrl: ethiopia,
      color: 'purple-500',
    },
    {
      genre:'ፍቅር',
      title: 'የሞት ቅኔ',
      description:
        'ሚስቱን ማመን ካቆመ ቆየ ይህ ደግሞ የሆነው ስራ ተቀጥራ መስራት ከጀመረች ጀምሮ ነው ብሎ ነው የሚያስበው፡፡ ሚስቱን ማመን ካቆመ ቆየ ይህ ደግሞ የሆነው ስራ ተቀጥራ መስራት ከጀመረች ጀምሮ ነው ብሎ ነው የሚያስበው፡፡',
      imageUrl: yemot_kine,
      color: 'cyan-500',
    },
    {
      genre:'ሳይንሳዊ',
      title: 'አስታማሚው',
      description:
        'እየተገለማመጠ ሀኪሙን ተጠጋው። እምባ ያቆሩ አይኖቹን ጨመቅ፣ጨመቅ እያደረገ ወደ ጆሮው ጠጋ አለና፤ “ዶክተር የማሳክምበት አቅሙ የለኝም።',
      imageUrl: doctore,
      color: 'indigo-500',
    },
    {
      genre:'ምናባዊ',
      title: 'ከውጥንቅጥ ማግስት',
      description:
        'ጥቁሩ መነጽሬ የፀይኔን መቅበዝበዝ እንጅ የነፍስና የሥጋዬን ኀዘን መሸፈን አለመቻሉን ሁኔታዬ ያሳብቅ ነበር።',
      imageUrl: wutinkit,
      color: 'purple-500',
    },
    {
      genre:'ልብ አንጠልጣይ',
      title: 'የሱሰኛ የአንድ ቀን ግለ-ታሪክ',
      description:
        'ስለ ሱሰኞች መፃፍ ይፈልጋል፡፡ ስለ ጫታቸው፣ ሲጋራቸው፣ ሀሺሻቸው፣ ቁማራቸው፣ የወሲብ ረሀባቸው፣ ስካራቸው…',
      imageUrl: susegna,
      color: 'cyan-500',
    },
  ];

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
      {features.map((feature) => (
        <li key={feature.genre} className="relative flex flex-col sm:flex-row xl:flex-row items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className={`mb-1 block text-sm leading-6 titles`}>
                {feature.genre}
              </span>
              {feature.title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>{feature.description}</p>
            </div>
            <a
              href=""
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
            >
              ሙሉውን ያንብቡ
              <span className="sr-only">{feature.description}</span>
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
            src={feature.imageUrl}
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
