/* eslint-disable no-unused-vars */
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex
    jsutify-center items-center flex-col'>
        <nav className='flex justify-between
        items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" 
            className='w-20 object-contain'/>
            <button type='button'
            onClick={() => window.open('https://github.com/rishu0007/Summarizer')}
            className='black_btn'>GitHub</button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br
            className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with Summarizer, an article
            summarizer that transforms lengthy articles into clear and
            concise summaries
        </h2>

    </header>
  )
}

export default Hero