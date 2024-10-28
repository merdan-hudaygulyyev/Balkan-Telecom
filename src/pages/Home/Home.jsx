const img = 'https://ahaltelecom.pythonanywhere.com/media/devices/mirnaya-professiya-bomboubejisha-4.jpg'
const img_1 = 'https://ahaltelecom.pythonanywhere.com/media/devices/i.webp'
const img_2 = 'https://ahaltelecom.pythonanywhere.com/media/devices/EDS-408A.jpg'


const Home = () => {

  return <div className="h-screen w-full ">
            <div className="flex flex-col gap-3 align-items-center laptop:flex-row my-3">
                <div className="w-[220px] flex justify-center">
                    <a href="" className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]">Durnukly</a>
                </div>
                <div className="w-[220px] flex justify-center">
                    <a href="" className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]">Näsazlyk</a>
                </div>
                <div className="w-[220px] flex justify-center">
                    <a href="" className="text-white no-underline bg-[#2c58c0] p-2 text-center transition-all rounded-lg font-mono w-[200px] hover:bg-[#213e83]">Düzedilmez ýagdaýda</a>
                </div>
            </div>

      <div className="w-full h-[545px] mx-auto">
          <h1 className="my-2 ml-[30px] text-2xl font-semibold text-white font-mono mb-14 sm:mt-9">Serwerler</h1>
          {/* //cards section */}
          <div className="flex min-h-screen  gap-20 ">
              <div className="group h-[400px] w-[300px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src={img} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-extrabold text-blue-500 mb-4">Ubuntu 24.04</h1>
                                <p className="text-lg text-blue-500 mb-4">Ýagdaýy: Durnukly</p>
                                <p className="text-base text-blue-500">N</p>
                            </div>
                        </div>
                </div>
             </div>      
             <div className="group h-[400px] w-[300px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src={img_1} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-extrabold text-blue-500 mb-4">Debian</h1>
                                <p className="text-lg text-blue-500 mb-4">Ýagdaýy: Durnukly</p>
                                <p className="text-base text-blue-500">A</p>
                            </div>
                        </div>
                </div>
             </div>      
             <div className="group h-[400px] w-[300px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src={img} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-extrabold text-blue-500 mb-4">Ubuntu 24.04</h1>
                                <p className="text-lg text-blue-500 mb-4">Ýagdaýy: Durnukly</p>
                                <p className="text-base text-blue-500">A</p>
                            </div>
                        </div>
                    </div>
                 </div>      
              </div>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl font-bold font-mono text-white mb-10">Kommutatorlar</h1>
            <div className="py-4 mx-52 w-[50%] flex justify-center">
            <div className="group h-[400px] w-[300px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src={img_2} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-extrabold text-blue-500 mb-4">Moha</h1>
                                <p className="text-lg text-blue-500 mb-4">Ýagdaýy: Durnukly</p>
                                <p className="text-base text-blue-500">Q</p>
                            </div>
                        </div>
                    </div>
                 </div>      
            </div>
          </div>

          <div className="mt-5 w-[700px]">
            <h1 className="text-2xl font-bold font-mono text-white mb-5">Üzniksiz</h1>
            <p className="text-base text-white font-mono ml-9 mb-5">Hiç zat tapylmady</p>
          </div>
  </div>;
};

export default Home;
