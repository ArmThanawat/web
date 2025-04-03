export default function Home() {
  return (
    <body className="m-0 p-0 box-border font-serif flex justify-center min-h-full">

      <div 
        id="banner-container" 
        className="relative m-8 p-8 border-4 overflow-hidden w-full max-w-[750px]"
      >
        <div 
          id="banner-box" 
          className="relative flex flex-col justify-center w-full h-[250px] bg-[rgb(22,191,22)]"
        >
          <h2 
            id="banner-title" 
            className="absolute font-bold sm:text-[1.5em] self-center py-2 px-5 translate-y-[-125px] border-2 bg-[rgb(135,206,235)]"
          >
            Banner
            </h2>

          <button 
            id="banner-button" 
            className="absolute self-end p-0.5 border-2 bg-[rgb(255,255,255)] translate-y-[-108px] translate-x-[-2px]"
          >
            x
          </button>

          <div 
          id="box-content" 
          className="absolute self-center font-bold sm:text-[2em] text-white p-4 border-2 border-dotted border-white "
          >
            <h1>This is Next.js position</h1>
          </div>
        </div>

        <div 
        id="circle" 
        className="absolute w-[100px] h-[100px] rounded-full translate-x-[-50%] translate-y-[-175%] bg-[#ededed]"
        >

        </div>
        <div 
        id="bottom" 
        className="absolute w-[200px] h-[200px] rounded-[60px] translate-x-[290%] translate-y-[-25%] bg-[#ededed]"
        >

        </div>
      </div>
    </body>

  );
}