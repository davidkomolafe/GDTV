import React, { useState, Fragment } from "react";
import Header from "../../Components/Header/Header";
import NewFilmCard from "../../Components/Cards/NewFilmCard";
import PopularFilmCard from "../../Components/Cards/PopularFilmCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CategoriesData } from "../../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Year" },
  { title: "2000 - 2005" },
  { title: "2005 - 2010" },
  { title: "2010 - 2015" },
  { title: "2015 - 2020" },
  { title: "2020 - 2025" },
];

const TimesData = [
  { title: "Hour" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];

const RatesData = [
  { title: "Rating" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const Film = () => {
  const [category, setCategory] = useState({ title: "Catalog" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className="h-full bg-popular  ">
      <Header />
      <div className="flex p-16 w-full relative">
        <div className="h-height w-30 bg-backgroundColorFadeL fixed rounded-xl z-10 text-textColor px-8 text-2xl flex flex-col">
          {Filter.map((item, index) => (
            <Listbox key={index} value={item.value} onChange={item.onChange}>
              <div className="relative">
                <Listbox.Button className="w-full flex justify-between items-center py-4 pt-8 border-b-2 border-popular">
                  <span className=" text-left">{item.value.title}</span>
                  <span className="bg-popular rounded-e-2xl px-4 py-3 text-3xl">
                    <MdKeyboardArrowDown className="bg-popular rounded-lg p-1 text-3xl" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-100"
                >
                  <Listbox.Options className="absolute overflow-auto max-h-80 custom-scrollbar z-10 mt-2 py-3 border border-textColorS w-full bg-backgroundColorFadeL rounded-lg text-textColor">
                    {item.items.map((iterm, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-3 pl-10 pr-4 ${
                            active
                              ? "bg-accent text-textColor"
                              : "text-textColorS"
                          }`
                        }
                        value={iterm}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {iterm.title}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaCheck className="h-4 w-4" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ))}
        </div>
        <div className="w-full relative pl-35">
          <div className="w-full items-start flex flex-col gap-4">
            <h3 className="text-textColor text-3xl">New Films</h3>
            <ul className="flex gap-5 mx-0 my-auto items-center text-2xl text-textColor">
              <NewFilmCard />
              <NewFilmCard />
              <NewFilmCard />
            </ul>
          </div>
          <div className="w-full items-start mt-10 flex flex-col gap-4">
            <h3 className="text-textColor text-3xl">Popular Movies</h3>
            <ul className="flex gap-5 mx-0 my-auto w-full flex-wrap items-center text-2xl text-textColor">
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
