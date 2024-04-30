function Sections(){
    const navigation = [
        {
            href: "javascript:void(0)",
            name: "አስቂኝ"
        },
        {
            href: "javascript:void(0)",
            name: "ፍቅር"
        },
        {
            href: "javascript:void(0)",
            name: "ልብ አንጠልጣይ"
        },
        {
            href: "javascript:void(0)",
            name: "ሳይንሳዊ"
        },
        {
            href: "javascript:void(0)",
            name: "ምናባዊ"
        },
        {
            href: "javascript:void(0)",
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
                            <li key={idx} className={`py-2 border-b-2 ${idx == 0 ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <a
                                    href={item.href}
                                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
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