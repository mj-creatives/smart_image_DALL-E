import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

import {surpriseMePrompts} from "../constant/index"

const PromptExamples = () => {

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Prompt Examples</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">List of example prompts you can build upon to generate your own AI image</p>
      </div>
      <ul className="list-none md:list-disc mt-16 max-w-4xl divide-y divide-dashed">
      {surpriseMePrompts.map((prompt,index) => (
          <li className="capitalize my-4" key={index}>{prompt}</li>
        ))}
      </ul>
    </section>
  );
};

export default PromptExamples;
