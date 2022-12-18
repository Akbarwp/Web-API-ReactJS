import { useEffect, useState } from "react";
import { getNewsList, searchNews } from "./api";

function App() {

  const [getCnnNews, setCnnNews] = useState([]);

  useEffect(() => {
    getNewsList().then((result) => {
      setCnnNews(result);
    });
  }, [])

  const search = async(input) => {
    if (input.length > 3) {
      const query = await searchNews(input);
      setCnnNews(query);
    }
  }

  function CnnNewsList() {
    return getCnnNews.map((news, i) => {
      return (
        <div className="p-4 bg-[#757de8] max-w-md rounded hover:scale-110 hover:drop-shadow-lg transition duration-300" key={i}>
          <div className="news-title text-2xl font-semibold mb-3 text-white">{news.title}</div>
          <div className="rounded-md shadow-md overflow-hidden mb-3 text-white">
            <img className="news-image" src={news.image.large} alt="gambar" />
          </div>
          <div className="news-date mb-3 text-xl text-[#002984] font-medium">{news.isoDate}</div>
          <div className="news-snippet text-base text-black text-justify">{news.contentSnippet}</div>
        </div>
      );
    });
  }

  return (
    <div className="container mx-auto pt-16 pb-32">
      <div className="w-full px-4">
        <div className="mx-auto text-center mb-16">
          <h4 className="font-semibold text-lg text-[#ff7961] mb-2">Berita-Berita Mantap</h4>
          <h2 className="font-bold text-white text-4xl mb-4">API dari <a href="https://github.com/satyawikananda/berita-indo-api" target="_blank" className="link text-[#f44336] decoration-[#002984] hover:text-[#ff7961] hover:decoration-[#757de8] transition" rel="noreferrer">satyawikananda</a></h2>

          <input type="text" placeholder="Cari berita uhuy...." className="news-search input input-bordered input-error w-full max-w-md text-white" onChange={({ target }) => search(target.value)} />
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-5">
        <CnnNewsList />
      </div>
    </div>
  );
}

export default App;
