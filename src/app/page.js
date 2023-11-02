'use client';

import { useEffect } from "react";
import {getDoaList} from "./api"
import jsonData from './companent/data.json'; 

export default function Home()
{
  

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="App">
      <header className="App-header">
        <h1 className="font-semibold">
          Yuk Doa
        </h1>
  
        <div className="flex container mx-auto">
            <h1 className="text-3xl font-semibold">Doa Harian</h1>
            <input className="ml-5 rounded-lg flex-auto w-64 text-center text-black" type="text" name="cari" placeholder="Masukan DOA" id="" />
        </div>
        
    <main className="container mx-auto mt-8">
       
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {jsonData.map(doa => (
          <li className="text-black" key={doa.id}>
            <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-black font-bold text-center text-xl pt-3">{doa.doa}</h2>
            <p  className="text-black pt-4">{doa.ayat}</p>
            <p  className="text-black pt-3">{doa.artinya}</p>
            </div>
          </li>
        ))}
            
        </section>
    </main>

    <footer className="bg-blue-500 text-white py-4 mt-8">
        <div className="container mx-auto">
            <p className="text-center">&copy; 2023 Doa Harian</p>
        </div>
    </footer>
      </header>
    </div>
  </main>
}
