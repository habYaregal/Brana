import "./Home.css";
import yemot_kine from "../../assets/Images/wifey.jpg";
import ethiopia from "../../assets/Images/Ethiopian_soldier.jpg";
import doctore from "../../assets/Images/The_doctor.jpg";
const posts = [
    {
        title: "የሞት ቅኔ",
        desc: "ሚስቱን ማመን ካቆመ ቆየ ይህ ደግሞ የሆነው ስራ ተቀጥራ መስራት ከጀመረች ጀምሮ ነው ብሎ ነው የሚያስበው፡፡ከዛን ጊዜ ጀምሮ የምታደርገው ነገር በሙሉ እየተከታተለ ጥልቀቱን ሊረዳው የማይችለው ቅናት ውስጥ ገባ፡፡",
        img: yemot_kine,
        date: "ሚያዝያ 12,2016",
        href: "javascript:void(0)"
    },
    {
        title: "ኢትዮጵያ ያመለጣት እድል",
        desc: "ኮሎኔል መንገሻ ወልደ ሚካኤል (8) ከአባቴ ጋር አንድ ኮርስ ሲሆኑ ያገኘኋቸውም አዲስ አበባ ነበር። አባቴ የልዩ ኃይሉ አዛዥ ሆኖ ድሬደዋ የሚሠራበት ወቅት እሳቸው እዚያው ከተማ የመድፈኛ ጦር የትምህርት መኮንን ሆነው ለአንድ ዓመት ቆይተዋል።",
        img: ethiopia,
        date: "ሚያዝያ 09,2016",
        href: "javascript:void(0)"
    },
    {
        title: "አስታማሚው",
        desc: "እየተገለማመጠ ሀኪሙን ተጠጋው። እምባ ያቆሩ አይኖቹን ጨመቅ፣ጨመቅ እያደረገ ወደ ጆሮው ጠጋ አለና፤ “ዶክተር የማሳክምበት አቅሙ የለኝም። እሱም አይድንም። ለስቃይና ለጭንቀት ከምንዳረግ እባክህ ሞቱን አፍጥንልኝ! ግደልልኝ!”",
        img: doctore,
        date: "ሚያዝያ 10,2016",
        href: "javascript:void(0)"
    }]

function Recent () {
    return (
        <section className="py-16 pt-25">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">ሰሞንኛ ልጥፎች</h1>
                    <p className="text-gray-600">በዚህ ሳምንት ተለጥፈው ተወዳጅነትን ያገኙ አዳዲስ ፅሑፎች</p>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block link-text text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 title-text font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Recent;