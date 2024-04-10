function Posts () {

    const tableItems = [
        {
            name: "እሳት ወይ አበባ",
            author: "ሎሬት ጸጋዬ ገብረመድኅን",
            date: "መጋቢት 12,2016",
            view: "12.5ሺህ"
        },
        {
            name: "ኦሮማይ",
            author: "በዓሉ ግርማ",
            date: "መጋቢት 21,2016",
            view: "11.4ሺህ"
        },
        {
            name: "ሰቆቃወ ጴጥሮስ",
            author: "ሎሬት ጸጋዬ ገብረመድኅን",
            date: "ሚያዝያ 1,2016",
            view: "10.8ሺህ"
        },
        {
            name: "አምስት ስድስት ሰባት",
            author: "ስብሀት ገብረእግዚአብሔር",
            date: "መጋቢት 29,2016",
            view: "10.6ሺህ"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    ተወዳጅ ልጥፎች
                </h3>
                <p className="text-gray-600 mt-2">
                    በብዙ አንባብያን የተነበቡ እና የተወደዱ ልጥፎች
                </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="divide-x">
                            <th className="py-3 px-6">ርዕስ </th>
                            <th className="py-3 px-6">ደራሲ</th>
                            <th className="py-3 px-6">የተለጠፈበት ቀን</th>
                            <th className="py-3 px-6">የዕይታ ብዛት</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="divide-x">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                        <span>{idx + 1}</span>
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.author}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.view}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Posts;