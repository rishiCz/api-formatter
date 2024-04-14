"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const AllApi = () => {
  const [formInput, setFormInput] = useState([""]);
  const [result, setResult] = useState(``);
  const [isSucess, setIsSucess] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const addInput = () => {
    setFormInput([...formInput, ""]);
  };
  const deleteInput = (index: number) => {
    const temp = [...formInput];
    temp.splice(index, 1);
    setFormInput(temp);
  };
  function changeInput(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const temp = [...formInput];
    temp[index] = e.target.value;
    setFormInput(temp);
  }

  const execute = async () => {
    const urlString = formInput.join(",");
    const url = `/api/allApi?q=${urlString}`;
    const res = await axios.get(url);
    setIsSucess(res.data.message === "SUCCESS");
    setResult(JSON.stringify(res.data, null, 2));
    setGeneratedUrl('')
  };

  const generateUrl = async () => {
    const urlString = formInput.join(",");
    const url = `/api/callMap`;
    const valApi = `/api/allApi?q=${urlString}`;
    const res = await axios.post(url, { valApi });
    setGeneratedUrl(res.data.url);
  };

  return (
    <div className="flex flex-col gap-8 items-center py-8">
      <h1 className="text-[3em] text-center font-mono">All API</h1>
      <h2 className="text-[1.5em] p-3  bg-slate-200 border- rounded-xl w-[70%] dark:text-slate-400 dark:bg-slate-700">
        Concatinate multiple GET API calls into one meta URL
      </h2>
      <div className="m-auto w-[70%] ">
        {formInput.map((val, ind) => (
          <div key={ind} className="flex mb-5 gap-5">
            <input
              value={val}
              placeholder="URL"
              onChange={(e) => {
                changeInput(e, ind);
              }}
              type="text"
              className=" border-solid w-full border border-black dark:border-slate-500 rounded-md bg-inherit"
            />
            {ind !== 0 && (
              <button
                onClick={() => {
                  deleteInput(ind);
                }}
                className="bg-red-500 text-white px-2 rounded-md"
              >
                <FaRegTrashAlt />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addInput}
          className="bg-slate-700 text-white p-3 w-[180px] rounded-lg"
        >
          Add +
        </button>
      </div>
      <div className="w-[70%] flex justify-between">
        <button
          onClick={execute}
          className="bg-green-600 text-white rounded-lg p-3 w-[200px]"
        >
          Run
        </button>
        {isSucess && (
          <button
            onClick={generateUrl}
            className="bg-green-700 text-white rounded-lg p-3 w-[200px]"
          >
            Generate Url
          </button>
        )}
      </div>
      {generatedUrl === "" || (
        <div className=" w-[70%]">
          <h2 className="font-mono text-[1.5em]">URL</h2>
          <div className="border border-slate-400">
            <div className="w-full h-[30px] overflow-hidden overflow-y-auto">
              <pre>{generatedUrl}</pre>
            </div>
          </div>
        </div>
      )}
      <div className=" w-[70%]">
        <h2 className="font-mono text-[1.5em]">Result</h2>
        <div className="border border-slate-400">
          <div className="w-full h-[400px] overflow-hidden overflow-y-auto">
            <pre>{result}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApi;
