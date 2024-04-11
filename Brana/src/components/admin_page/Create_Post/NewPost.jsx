import Finished from "./Finished";
import Steps from "./Steps";
import "../Admin.css";
function NewPost() {
  return (
    <>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        አዲስ ልጥፍ
      </div>
      <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="ርዕስ"
          type="title"
        ></input>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="የደራሲው ስም"
          type="title"
        ></input>
        <div className="relative w-full max-w-full bg-gray-100 p-2 mb-4 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-gray-100  border rounded-lg shadow-sm outline-none appearance-none">
          <option value="" disabled selected>ዘውግ</option>
            <option>አስቂኝ</option>
            <option>ልብ አንጠልጣይ</option>
            <option>ሳይንሳዊ</option>
            <option>ፍቅር</option>
            <option>ታሪክ</option>
            <option>ምናባዊ</option>
          </select>
        </div>
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="ሙሉ ፅሑፉን ያስቀምጡ"
        ></textarea>

        <div class="icons flex text-gray-500 m-2">
          <svg
            class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </div>

        <div class="buttons flex">
          <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            ይሰርዙ
          </div>
          <div class="btn border  p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 add-member-button">
            ይለጥፉ
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPost;
