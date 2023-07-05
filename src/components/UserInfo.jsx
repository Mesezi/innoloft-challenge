import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import map from '../assets/map.png'

const UserInfo = ({product}) => {

    const config = useSelector(state=>state.configuration?.configuration)

  return (
 
    <article className='md:w-1/3 flex flex-col gap-4'>
    {config.hasUserSection && 
    <>
     <p className='font-bold'>Offered by </p>
    <img src={product.data.company.logo} className='max-h-8 object-contain self-start' alt="" />
    <div className="flex gap-2">
      <img src={product.data.user.profilePicture} className='h-12 w-12 rounded-full object-cover' alt="" />
      <div className="flex flex-col">
        <p className='font-bold'>{product.data.user.firstName} {product.data.user.lastName}</p>
        <p>{product.data.company.name}</p>
      </div>
    </div>
    </>
   
}
    <div>
    <div className='flex mt-5'>
    <svg width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6870_1104)">
    <path d="M8.00001 16.3149C7.86741 16.3149 7.74023 16.2623 7.64646 16.1685C7.55269 16.0747 7.50001 15.9475 7.50001 15.8149C7.50001 13.646 6.25781 12.0073 5.05661 10.4233C3.93551 8.94494 2.77731 7.41744 2.77731 5.53764C2.77731 4.1525 3.32756 2.82408 4.30701 1.84463C5.28645 0.865189 6.61487 0.314941 8.00001 0.314941C9.38516 0.314941 10.7136 0.865189 11.693 1.84463C12.6725 2.82408 13.2227 4.1525 13.2227 5.53764C13.2227 7.41764 12.0645 8.94484 10.9434 10.4233C9.74221 12.0073 8.50001 13.646 8.50001 15.8149C8.50001 15.9475 8.44734 16.0747 8.35357 16.1685C8.2598 16.2623 8.13262 16.3149 8.00001 16.3149ZM8.00001 1.31494C6.8805 1.31629 5.80722 1.76161 5.0156 2.55323C4.22399 3.34485 3.77866 4.41813 3.77731 5.53764C3.77731 7.08054 4.78611 8.41064 5.85351 9.81884C6.72252 10.8678 7.44466 12.0302 8.00001 13.2739C8.55537 12.0302 9.2775 10.8678 10.1465 9.81884C11.2139 8.41064 12.2227 7.08054 12.2227 5.53764C12.2214 4.41813 11.776 3.34485 10.9844 2.55323C10.1928 1.76161 9.11953 1.31629 8.00001 1.31494V1.31494Z" fill="#6B7280"/>
    <path d="M8 7.64405C7.58327 7.64398 7.17592 7.52032 6.82946 7.28872C6.48301 7.05713 6.21301 6.728 6.05362 6.34295C5.89422 5.95791 5.85259 5.53424 5.93398 5.12553C6.01537 4.71683 6.21614 4.34143 6.51088 4.04683C6.80563 3.75222 7.18112 3.55164 7.58986 3.47044C7.99861 3.38924 8.42226 3.43107 8.80723 3.59065C9.1922 3.75023 9.5212 4.02038 9.75263 4.36695C9.98406 4.71351 10.1075 5.12092 10.1074 5.53765C10.1066 6.09623 9.88426 6.63167 9.48919 7.02655C9.09413 7.42143 8.55858 7.6435 8 7.64405ZM8 4.43015C7.7811 4.43023 7.56713 4.49521 7.38515 4.61688C7.20317 4.73854 7.06134 4.91143 6.9776 5.11369C6.89386 5.31594 6.87197 5.53848 6.91469 5.75318C6.9574 5.96788 7.06282 6.16509 7.2176 6.31989C7.37238 6.47468 7.56959 6.58011 7.78428 6.62285C7.99897 6.66559 8.22152 6.64372 8.42378 6.55999C8.62604 6.47627 8.79894 6.33446 8.92062 6.15249C9.04231 5.97052 9.1073 5.75656 9.1074 5.53765C9.10701 5.24407 8.99021 4.96262 8.78262 4.75501C8.57503 4.5474 8.29359 4.43058 8 4.43015V4.43015Z" fill="#6B7280"/>
    </g><defs>
    <clipPath id="clip0_6870_1104">
    <rect width="16" height="16" fill="white" transform="translate(0 0.314941)"/>
    </clipPath>
    </defs>
    </svg>
          <p>{product.data.company.address.street} {product.data.company.address.house}, <br></br> 
          {product.data.company.address.zipCode} {product.data.company.address.city.name} {product.data.company.address.country.name}</p>
    </div>

    <img src={map} className='w-full' alt="" />
    </div>
    
      </article>
 
  )
}

export default UserInfo