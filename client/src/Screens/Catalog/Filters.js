import React, { useState, Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CategoriesData } from "../../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Sort By Year" },
  { title: "2000 - 2005" },
  { title: "2005 - 2010" },
  { title: "2010 - 2015" },
  { title: "2015 - 2020" },
  { title: "2020 - 2025" },
];

const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];

const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
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
    <div className="flex gap-10 justify-center flex-wrap items-center text-2xl h-32 w-full text-textColor max-[450]:w-20 max-[450px]:py-20 max-[450px]:h-80">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative ">
            <Listbox.Button className="relative flex justify-between items-center w-20 rounded-2xl  border border-textColorS divide-x">
              <span className=" text-left pl-6">{item.value.title}</span>
              <span className="bg-popular rounded-e-2xl px-4 py-3 text-3xl">
                <MdKeyboardArrowDown aria-hidden="true" />
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
                        active ? "bg-accent text-textColor" : "text-textColorS"
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
  );
};

export default Filters;
