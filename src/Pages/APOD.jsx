import Image from "../components/common/Image";
import { useEffect, useState } from "react";
import { getTodayAPOD, getAPODByDate, getLibraryItems } from "../api/apodApi";

const APOD = () => {
  const [apod, setApod] = useState(null);
  const [libraryItems, setLibraryItems] = useState([]);

  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);

  // Library API
  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const data = await getLibraryItems();
        setLibraryItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLibrary();
  }, []);

  // APOD API
  useEffect(() => {
    const fetchApod = async () => {
      try {
        const data = await getTodayAPOD();
        setApod(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApod();
  }, []);

  const handleDateChange = async (e) => {
    const date = e.target.value;

    setSelectedDate(date);
    setLoading(true);

    try {
      const data = await getAPODByDate(date);
      setApod(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-4 py-16 text-left text-white md:items-center md:text-center mt-20">
        <h1 className="text-3xl font-bold md:text-5xl playfair-display">
          Astronomy and Space Gallery
        </h1>
        <h2 className="mt-4 text-sm leading-relaxed md:text-md lg:text-xl open-sans">
          From today's Astronomy Picture of the Day to NASA's extensive media
          archive, discover the beauty and science of space.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3 mb-10">
        <p className="text-sm text-gray-400 inline-block px-10">
          Select any date since June 16, 1995 to discover NASA's Astronomy
          Picture of the Day.
        </p>
        <div className="flex  justify-center gap-4 ">
          <label className="text-lg font-semibold text-white pt-2">
            Explore Astronomy History
          </label>

          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split("T")[0]}
            min="1995-06-16"
            className="rounded-lg border border-white/20 bg-white/40 px-4 py-2 text-white outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="m-5 flex flex-col gap-4 rounded border border-white/20 p-4 md:flex-row md:items-center md:justify-center md:p-6">
        {loading ? (
          <div className="flex h-100 w-full items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        ) : apod?.media_type === "image" ? (
          <img
            src={apod?.url}
            alt={apod?.title}
            className="max-h-125 max-w-full object-cover transition-transform duration-300 hover:scale-95 md:max-w-lg"
          />
        ) : (
          <iframe
            src={apod?.url}
            title={apod?.title}
            className="h-100 w-full rounded-xl md:w-150"
            allowFullScreen
          />
        )}
        <div className="mt-2 flex flex-col justify-evenly md:ml-6 md:mt-0">
          <h1 className="mb-4 text-left playfair-display">{apod?.title}</h1>
          <p className="p-2 text-left text-sm text-gray-400 open-sans">
            {apod?.explanation}
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Image items={libraryItems} />
      </div>
    </>
  );
};
export default APOD;
