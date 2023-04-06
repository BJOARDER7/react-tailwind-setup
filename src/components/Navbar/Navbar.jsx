import { list } from 'postcss';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const routes = [
    {id:1,
      name:'shovon',
      path:'/name'
    },
    {id:2,
      name:'shormi',
      path:'/about'
    },
    {id:3,
      name:'somic',
      path:'/contact'
    },
    {id:4,
      name:'sabrina',
      path:'/nick'
    },
    {id:5,
      name:'bahar',
      path:'/vill'
    }
]
  return (
    <div>
      <nav>
      <div onClick={() => setOpen(!open)} className='md:hidden'>
        <span>
            {
                open === true ? 
                <XMarkIcon className="h-6 w-6 text-purple-500"/> : 
                <Bars3Icon className="h-6 w-6 text-purple-500" />
            }
        </span>

    
       </div>
        <ul className={`md:flex absolute md:static duration-500 bg-purple-400 pl-8 py-2 ${open ? 'top-6': '-top-36' }`}>
        {
          routes.map(route => <Link 
            key={route.id}
            route={route}
            ></Link>)
        }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;