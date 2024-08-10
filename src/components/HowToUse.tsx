function HowToUse() {
  return (
    <div className="container mx-auto flex flex-col items-center h-svh gap-y-28 pt-40 md:pt-[initial]" id="#how-to-use">
      <h1 className="font-title text-[2rem]">Como usar?</h1>
      <iframe
        src="https://www.youtube.com/embed/hB7CDrVnNCs?si=1EMNBXlPx9xIj2jd"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl w-full h-screen"
      ></iframe>
    </div>
  );
}

export default HowToUse