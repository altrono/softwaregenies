import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const ProjectsStat = () => {
    const stats = [
        {
            number: '30',
            sign: '+',
            desc: 'JavaScript experts on board'
        },
        {    
            number: '5',
            sign: '+',    
            desc: 'years of operating experience'
        },
            
        {
            number: '100',
            sign: '%',
            desc: 'clients stay with us'
        },
        {
            number: '4',
            sign: 'x',
            desc: 'revenue growth last year'
        }
        
    ];
  return (
    <div className="flex flex-col  w-full bgOrange md:py-30 py-20">
        <div className='grid grid-cols-2  gap-4  lg:grid-cols-4 h-full  w-full'>
            {stats.map(item => (
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row text-white items-center">
                        <h2 className='text-4xl md:text-6xl font-bold'>{item.number}</h2>
                        <p className=' text-lg text-neutral-200 font-bold text-center'>{item.sign}</p>
                    </div>
                    <p>{item.desc}</p>
                </div>
            ))}  
        </div>
        <Link href='/' className='mt-10 px-5 py-3 w-200 rounded-full flex gap-2 bg-white text-neutral-600 max-w-fit m-auto font-bold transition duration-300 hover:bg-neutral-900 hover:text-white'>
            <div className="">Tell us about your project</div>
            <ArrowRight />
        </Link>
    </div>
  )
}

export default ProjectsStat



