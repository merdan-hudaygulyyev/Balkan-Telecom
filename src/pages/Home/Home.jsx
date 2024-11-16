import { GoArrowUp } from "react-icons/go";
import { useState, useEffect } from "react";
const img_2 =
  "https://ahaltelecom.pythonanywhere.com/media/devices/EDS-408A.jpg";

import imgOne from '../../assets/img/anten_3.png'
import imgTwo from '../../assets/img/anten_5.png'
import imgThree from '../../assets/img/anten-img.png'


const Home = () => {
  const storageRows = localStorage.getItem('rows')
  const [isVisible, setIsVisible] = useState(false);
  // const [rows, setRows] = useState(JSON.parse(storageRows) ? JSON.parse(storageRows) : [])
  const [rows, setRows] = useState(JSON.parse(storageRows) ?? [])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-3 align-items-center laptop:flex-row my-3">
        <div className="w-[220px] flex justify-center">
          <a
            href=""
            className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]"
          >
            Durnukly
          </a>
        </div>
        <div className="w-[220px] flex justify-center">
          <a
            href=""
            className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]"
          >
            Näsazlyk
          </a>
        </div>
        <div className="w-[220px] flex justify-center">
          <a
            href=""
            className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]"
          >
            Düzedilmez ýagdaýda
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="my-2 ml-[30px] text-2xl font-semibold text-[#2c58c0] font-mono mb-14 sm:mt-9">
          Serwerler
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {
            rows?.map((row, index) => (
              <div key={index} className="group ml-5 relative block [perspective:1000px] rounded-xl pt-[100%] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl transition-all duration-300 bg-blue-800 dark:bg-white [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
                  <div className="h-full w-full">
                    <img
                      src={imgTwo}
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    />
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col shadow-xl items-center justify-center">
                      <h1 className="text-3xl font-extrabold text-blue-500 mb-4">
                        {row.antennas}
                      </h1>
                      <p className="text-lg text-blue-500 mb-4">
                        Ýagdaýy: {row.category}
                      </p>
                      <p className="text-base text-blue-500">{row.name}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-5 ">
        <h1 className="text-2xl font-bold font-mono text-[#2c58c0] mb-10">
          Kommutatorlar
        </h1>
        <div className="py-4 mx-52 w-[50%] flex justify-center">
          <div className="group h-[400px] w-[300px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 ">
                <img
                  src={img_2}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0  h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold text-blue-500 mb-4">
                    Moha
                  </h1>
                  <p className="text-lg text-blue-500 mb-4">
                    Ýagdaýy: Durnukly
                  </p>
                  <p className="text-base text-blue-500">Q</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[700px]">
        <h1 className="text-2xl font-bold font-mono text-[#2c58c0] mb-5">
          Üzniksiz
        </h1>
        <p className="text-base text-[#2c58c0] font-mono ml-9 mb-5">
          Hiç zat tapylmady
        </p>
      </div>
      {isVisible && (
        <button onClick={handleScrollToTop} style={buttonStyle}>
          <GoArrowUp />
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "#007BFF",
  color: "#FFFFFF",
  border: "none",
};

export default Home;
