import "./Home.css";
import tsegaye from "../Images/Tsegaye.jpg";
import bealu from "../Images/bealu.jpg";
import sibhat from "../Images/sibhat.jpg";
function Writers () {

    const team = [
        {
            avatar: tsegaye,
            name: "ሎሬት ጸጋዬ ገብረመድኅን",
            title: "ባለ ቅኔ እና ፀሐፌ ተውኔት",
            desc: "ፈራን፣ ሰቆቃዎ ጴጥሮስ፣ ሀሁ በስድስት ወር፣ ቴዎድሮስ",
        },
        {
            avatar: bealu,
            name: "በዓሉ ግርማ",
            title: "ደራሲ እና ሀያሲ",
            desc: "ሀዲስ፣ ደራሲው፣ ኦሮማይ፣ ከአድማስ ባሻገር፣ የቀይ ኮከብ ጥሪ",
        },
        {
            avatar: sibhat,
            name: "ስብሐት ለአብ ገብረእግዚአብሔር",
            title: "ደራሲ",
            desc: "አምስት ስድስት ሰባት፣ ሌቱም አይነጋልኝ፣ ቦርጨቅ፣ ሰባተኛው ሰማይ",
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        አብረውን የሚሰሩ ደራሲያን
                    </h3>
                    <p className="text-gray-600 mt-3">
                        ብራና ላይ ለመፃፍ የሚያስፈልገው ችሎታ እና ጥልቅ ፍላጎት ብቻ ነው። አብረውንም በሀገር የገዘፈ ስም ካላቸው እስከ ወጣት እና አዳዲስ ደራሲያን ይሰራሉ
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-gray-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
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

export default Writers;