import { useState } from 'react'
import './App.css'
import { SquareArrowOutUpRight } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');

  const works: String[] = [];
  const working: String[] = ["this website", "norailco/sugarline (game)", "some other stuff"];

  return (

    <div className='bg-[rgba(30,31,31,1)] flex flex-col text-[rgba(217,217,217,1)] w-screen h-screen 
    items-center justify-center md:items-start md:justify-start md:p-50 text-2xl'>

      {page == 'working' && <div>
        <div><button onClick={() => (setPage('home'))} className='border-b mb-5'>back</button>
          <h1 className='pb-5'>[what i'm] working [on right now]</h1>
          {working.map((work, index) => (
            <div key={index}>- {work}</div>
          ))}
        </div>
      </div>}
      {page == 'works' && <div><button onClick={() => (setPage('home'))} className='border-b mb-5'>back</button>
        <h1 className='pb-5'>works [I've worked on]</h1>
        {works.length > 0 ? works.map((work, index) => (
          <div key={index}>- {work}</div>
        ))
          : <div>
            <div>"I'll finish a project this year I swear 🤞 ™️</div>
            <div className='flex flex-row'>
              <a href="https://github.com/ejqs" className='flex-row border-b'>GitHub</a>
              <SquareArrowOutUpRight />
            </div>
          </div>}

      </div>}
      {
        page == 'home' && <>
          <h1 className="text-3xl font-bold pb-5">
            ejqs
          </h1>
          <div><button onClick={() => (setPage('working'))} className='pb-2'>working</button></div>
          <div><button onClick={() => (setPage('works'))} className='pb-2'>works</button></div>
          <div>----</div>
          <div className='flex flex-row'><a href="https://ejqs.net" className='pr-2'>blog</a><SquareArrowOutUpRight /></div>
        </>
      }


    </div >
  )
}

export default App;
