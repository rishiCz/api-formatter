"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllKeys = () => {
  const [formInput, setFormInput] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [isKeyMatch, setIsKeyMatch] = useState(true);

  function changeUrlInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInput(e.target.value);
  }
  const handleKeyChange = (e: any) => {
    setKeyInput(e.target.value);
  };
  const execute = async () => {
    // const urlString = formInput.join(",");
    // const url = `/api/allApi?q=${urlString}`;
    // const res = await axios.get(url);
    // setResult(JSON.stringify(res.data, null, 2));
  };

  const generateUrl = async () => {
    const body = {
      valApi: formInput,
      key: keyInput,
    };
    console.log(body);
    const res = await axios.post(`/api/callMap`, body);
    setGeneratedUrl(res.data.url);
  };

  const EffectiveUrl = () => {
    const [start, end]: string[] = formInput.split(keyInput);
    return (
      <div className=" bg-gray-200 dark:bg-slate-600  flex items-center px-2 rounded-md">
        <label htmlFor="">{start}</label>
        <label
          htmlFor=""
          className="py-1 px-1 text-green-500 border-2 border-green-500 bg-green-100 dark:bg-green-900 rounded-md"
        >
          {keyInput}
        </label>
        <label htmlFor="">{end}</label>
      </div>
    );
  };

  useEffect(() => {
    setIsKeyMatch(
      keyInput != "" &&
      formInput.includes(keyInput) &&
      formInput.split(keyInput).length === 2
    );
  }, [keyInput, formInput]);

  return (
    <div className="flex flex-col gap-8 items-center py-8 w-[98%] sm:w-[70%] m-auto">
      <h1 className="text-[3em] text-center font-mono">All Keys</h1>
      <h2 className="text-[1.5em] p-3 bg-slate-200 border- rounded-xl dark:text-slate-400 dark:bg-slate-700">
      Retrieve data from an API that necessitates multiple calls with varying attributes consolidated into a single meta URL.
      </h2>
      <div className="m-auto  w-full">
        <div className="flex flex-col mb-5 gap-5 ">
          <div className="w-full">
            <input
            placeholder="API URL"
              value={formInput}
              onChange={(e) => {
                changeUrlInput(e);
              }}
              type="text"
              className="w-full dark:border-slate-500 border border-black rounded-mdocus:outline-none"
            />
          </div>

          <input
          placeholder="Key"
            value={keyInput}
            onChange={(e) => handleKeyChange(e)}
            className="border-solid dark:border-slate-500 w-[30%] border border-black rounded-md"
          />
          {isKeyMatch && <EffectiveUrl />}
        </div>
      </div>
      <div className=" flex justify-between">
        <button
          disabled = {!isKeyMatch}
          onClick={generateUrl}
          className="bg-green-700 disabled:bg-slate-500 text-white rounded-lg p-3 w-[200px]"
        >
          Generate Url
        </button>
      </div>
      {generatedUrl === "" || (
        <div className="">
          <h2 className="font-mono text-[1.5em]">URL</h2>
          <div className="border border-slate-400">
            <div className="w-full h-[30px] overflow-hidden overflow-y-auto">
              <pre>{generatedUrl}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllKeys;

// write a function to add 2 numbers
