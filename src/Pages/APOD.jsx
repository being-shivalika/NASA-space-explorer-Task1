import Image from "../components/common/Image";
import { useEffect, useState } from "react";
import { getTodayAPOD, getLibraryItems } from "../api/apodApi";

const APOD = () => {
  const [apod, setApod] = useState(null);
  const [libraryItems, setLibraryItems] = useState([]);

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

  return (
    <>
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-4 py-16 text-left text-white md:items-center md:text-center">
        <h1 className="text-3xl font-bold md:text-5xl">
          Explore the Deep Cosmos
        </h1>
        <h2 className="mt-4 text-sm leading-relaxed md:text-lg lg:text-2xl">
          A new window into the universe every single day, backed by decades of
          space photography and missions.
        </h2>
      </div>

      <div className="m-5 flex flex-col gap-4 rounded border border-white/20 p-4 md:flex-row md:items-center md:justify-center md:p-6">
        <img
          src={apod?.url}
          alt={apod?.title}
          width="auto"
          className="max-h-125 max-w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95 md:max-w-lg"
        />

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
