import React from 'react'
import { HomeHero } from 'movie-design-hv'
import {useNavigate} from 'react-router-dom'
import {Button} from 'movie-design-hv'
import {Divider} from 'movie-design-hv'
function IndexLayout() {
    const homeHeroProps = {
        logoClassName:"h-12",
        className:"absolute",
        backgroundImage:"/bgImage.jpg",
        logoImage:"/Group 3.png",
        overlayColor: "rgba(0, 0, 0, 0.7)",
        overlayOpacity: 0.4,
      };

      const navigate=useNavigate
    
    //   label?: string,
    // children?: React.ReactNode,
    // className?: string,
    // isDisabled?: boolean,
    // onClick?: (e: React.MouseEvent) => void,
    // size?: 'small' | 'base' | 'large',
    // type?: "dimmed" | "primary" | "secondary" | "outline",
    // rounded?: boolean,
    // btnTextClassName?: string,
  return (
    <div className="relative">
        <HomeHero {...homeHeroProps} />


   <div className="absolute w-2/3 mx-auto inset-x-0 bottom-[10%] justify flex flex-col items-center  bottom-100">
         <Button
          type="primary"
          size="large"
          label="Sign In"
          className="w-full bg-purple-700 text-white hover:bg-purple-800 transition-all"
        //   onClick={() => navigate('/signin')}
        >
         
        </Button>

        {/* Divider */}
        <Divider
          text="or"
          width="w-full"
          className="text-gray-300 flex my-[10px] "
          textClassName="text-gray-400"
        />

        {/* Sign Up Button */}
        <Button
        label="Sign Up"
          type="primary"
          size="large"
          className="w-full bg-purple-700 text-white hover:bg-purple-800 transition-all"
        //   onClick={() => navigate('/signup')}
        >
          
        </Button></div>
        
       
    </div>
  )
}

export default IndexLayout