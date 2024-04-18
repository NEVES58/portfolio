function PageAbout() {
  return (
    <div id="PageAbout" className="bg-[#000F26] flex flex-row items-center justify-evenly p-20">
      <div className="flex flex-col items-center justify-center"> 
        <div className="text-white text-center font-bold">
          <h2 className="text-3xl">Hello! I`m João Neves,</h2>
          <p className="text-xl">
            <br />a 19-year-old computer engineering student based in Coimbra.
            <br />
            I`m passionate about technology and love tackling new challenges{" "}
            <br />
            to create innovative solutions.
            <br />
            Let`s connect and build something amazing together!
          </p>
        </div>
        <button className="w-2/6 h-12 rounded-2xl mt-12 bg-blue-500 font-bold text-black text-xl">More About Me</button>
      </div>
      <img src="/fotoPessoal.jpg" className="w-1/6 rounded-full" />
    </div>
  );
}

export default PageAbout;
