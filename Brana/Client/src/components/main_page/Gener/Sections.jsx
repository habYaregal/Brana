import '../main.css';
import { Link, useLocation } from "react-router-dom";
function Sections(){
    const navigation = [
        {
            href: "/blog/gener/",
            name: "አስቂኝ"
        },
        {
            href: "/blog/gener/love",
            name: "ፍቅር"
        },
        {
            href: "/blog/gener/suspense",
            name: "ልብ አንጠልጣይ"
        },
        {
            href: "/blog/gener/science",
            name: "ሳይንሳዊ"
        },
        {
            href: "/blog/gener/fantasy",
            name: "ምናባዊ"
        },
        {
            href: "/blog/gener/history",
            name: "ታሪክ"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-2xl font-bold">
                    ዘውግ
                </h3>
                <p className="text-gray-600 mt-2">
                    በሚፈልጉት ርዕሰ ጉዳይ ላይ መርጠው ያንብቡ
                </p>
            </div>
            <div className="mt-6">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        navigation.map((item, idx) => (
                            // Replace [idx == 0] with [window.location.pathname == item.path] or create your own logic
                            <li key={idx} className={`py-2 border-b-2 ${location.pathname === item.href? "first-item" : "border-white text-gray-500"}`}>
                                <a
                                    href={item.href}
                                    className="py-2.5 px-4 rounded-lg duration-150 text-sm first-item hover:bg-gray-50 active:bg-gray-100 font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Sections;