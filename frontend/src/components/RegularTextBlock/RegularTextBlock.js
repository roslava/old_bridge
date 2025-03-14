export default function RegularTextBlock({ text, handleReadMore }) {
  return (
    <div className="text-block text-black [&_p::selection]:bg-old-white-light">
      <p>{text}...</p>
      <p onClick={handleReadMore} className="text-white bg-black px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-lime-50 hover:text-black transition-all duration-300 mt-4 select-none">Читать далее</p>
    </div>
  );
}
