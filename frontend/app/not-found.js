import Link from 'next/link'

export default function NotFound() {
  return <div className='pt-12 text-myCol text-[32px] text-center '>
      <h1>Strona nie istnieje – 404!</h1>
      <div>
        <Link href="/" ><p className=' transition-transform duration-300 transform hover:scale-125 '>Wróć na stronę główną</p></Link>
      </div>
  </div>
}