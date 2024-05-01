import "../Admin.css";
import { useState } from "react";
import { imageDb } from '../../Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
function NewPost() {
  const [img,setImg] =useState('');
  const [imgUrl,setImgUrl] =useState('');
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [genre, setGenre]=useState('');
  const [content, setContent]=useState('');

  async function imageHandleClick(){
    if(img !==null){
      const imgRef =  ref(imageDb,`files/${v4()}`)
      const uploadResult = await uploadBytes(imgRef, img);
    const downloadURL = await getDownloadURL(uploadResult.ref);
    setImgUrl(downloadURL);
   }}

   function formClickHandler(){
    let userData = {
      title: title,
      author: author,
      genre: genre,
      content: content,
      imgUrl: imgUrl,
    };
    fetch("http://localhost:3000/newpost/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      setTitle('');
      setAuthor('');
      setContent('');
      setGenre('');
      setImg('');
      setImgUrl('');
   }

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
          onChange={(e)=>setTitle(e.target.value)}
          type="title"
        ></input>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="የደራሲው ስም"
          onChange={(e)=>setAuthor(e.target.value)}
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
          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-gray-100  border rounded-lg shadow-sm outline-none appearance-none" onChange={(e)=>setGenre(e.target.value)}>
            <option value="" disabled selected>
              ዘውግ
            </option>
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
          onChange={(e)=>setContent(e.target.value)}
          placeholder="ሙሉ ፅሑፉን ያስቀምጡ"
        ></textarea>
        <div className="flex">
        <label className="file-input-wrapper title bg-gray-100 border border-gray-300 mt-4 mb-4 outline-none w-4/5">
        <div class="icons flex text-gray-500 m-2">
        <span className="mr-4">ምስል ይምረጡ</span>
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
          <input type="file" style={{display:"none"}} onChange={(e)=>setImg(e.target.files[0])}/>
        </label>
        <button className="ml-4 btn border  p-1 px-4 font-semibold cursor-pointer text-gray-200 my-4 confirm add-member-button w-1/5" onClick={imageHandleClick}>ያረጋግጡ</button>
        </div>
        <div class="buttons flex">
          <div class="btn border  p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 add-member-button" onClick={formClickHandler}>
            ይለጥፉ
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPost;
