import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import CountUp from 'react-countup'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-slate-800 mt-12 rounded-xl shadow-lg px-8 py-6 mx-4`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            <CountUp
              end={parseInt(stat.value)} // Assumes stat.value is like "230" (without + or $)
              duration={2}
              separator=","
            />
            {stat.value.match(/[^\d]+$/)?.[0] || ''} {/* Shows +, M, etc */}
          </h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
