import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, PromptExamples } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="inline-flex text-xs">
        <Link to="/create-post">
          <button className="font-inter font-medium bg-[#C3E4EB] text-[#4E4E50] hover:text-[#fff] hover:bg-gray-400 font-bold py-2 px-4 rounded-l">
            Create Image
          </button>
        </Link>
        <Link to="/prompt-examples">
          <button className="font-inter font-medium bg-[#C3E4EB] text-[#4E4E50] hover:text-[#fff] hover:bg-gray-400 font-bold py-2 px-4 rounded-r">
            Prompt Examples
          </button>
        </Link>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/prompt-examples" element={<PromptExamples />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
