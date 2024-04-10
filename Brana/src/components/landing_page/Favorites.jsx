import "./Home.css"
function Favorites () {
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "የሱሰኛ የአንድ ቀን ግለ-ታሪክ",
            desc: "ስለ ሱሰኞች መፃፍ ይፈልጋል፡፡ ስለ ጫታቸው፣ ሲጋራቸው፣ ሀሺሻቸው፣ ቁማራቸው፣ የወሲብ ረሀባቸው፣ ስካራቸው…ስለ ሁሉም እብደታቸው መፃፍ ይፈልጋል፡፡ ግን እንዴት አድርጎ፤ አንድም ቀን ጫት ቅሞ በምርቃና መደንዘዝን አያውቅበትም፣ ሲጋራ አጭሶ ራስን የማንደድ ብልሀትን ከንፈሮቹ አይረዱትም፡፡ ስካርን አያውቀውም፣ እብደቱን አልደረሰበትም፡፡",
            href: "javascript:void(0)"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "ከውጥንቅጥ ማግስት",
            desc: "ጥቁሩ መነጽሬ የፀይኔን  መቅበዝበዝ እንጅ የነፍስና የሥጋዬን  ኀዘን መሸፈን አለመቻሉን ሁኔታዬ ያሳብቅ ነበር። ኀዘኔ ትንሽ ጋብ ያለ ሲመስለኝ ዙሪያ ገባውን ለማስተዋል ሞከርኩ። ከአብዛኛው ተስተናጋጅ ተገንጥለን ከወደ ጥግ ነው የተቀመጥነው። አሁን ባንበት ሁኔታ ለምን ያህል ሰዓታ እንደተቀመጥን እንጃ።የገረጣ ፊቱን እንዳላየ ማለፍ ከባድ ነው። ከጊዜ ጋር መጣላቱን የሚያሳይ ከባድ የአካል ለውጥ አድርጓል።",
            href: "javascript:void(0)"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "እሷ ስትስቅ…",
            desc: "ምን ልፃፍ? ሀሳቤ ከጭንቅላቴ ውስጥ ተናጥቦ ጠፋብኝ፡፡ የቃላት ርሀብ ሰቅዞኝ ህሊናዬ ሲጮህ ካጠገቤ ያሉትን ይበጠብጥ ጀመር፡፡ እንደ ንፋስ ያለ ባዶነት የማሰብ አቅሜን ተፈታተነው፡፡ ሆኖም ምጡ እንዳለ ነው፡፡ ትግል ያለበት የቃላት ምጥ ሲበረታ እንደ እብድ የሚያደርገው ነገር አለው፡፡ አሁኑኑ ከቤቴ ወጥቼ ሀሳብ መፍጠር አለብኝ፡፡ የሚፃፍ ሀሳብ፡፡ አሁን መሽቷል…",
            href: "javascript:void(0)"
        },
    ]

    return (
        <section className="pt-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3 mt-7 text-center mx-10">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        ተወዳጅ ፅሑፎች
                    </h3>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 text-white rounded-lg flex items-center justify-center fav-icon">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                        <a href={item.href} className="text-sm duration-150 link-text font-medium inline-flex items-center gap-x-1">
                                            ተጨማሪ ያንብቡ
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Favorites;