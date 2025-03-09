export default function RegularTextBlock({ text, handleReadMore }) {
  return (
    <div className="text-block text-white">
      <p>{text}...</p>
      <p onClick={handleReadMore} className="text-white bg-black px-4 py-1 rounded-full w-fit cursor-pointer hover:bg-white hover:text-black transition-all duration-300 mt-2">читать далее</p>
    </div>
  );
}
