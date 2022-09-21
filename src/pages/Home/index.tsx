import { ExchangeTable, ExchangeItemCard } from '../../components'
import { IExchange } from '../../constants/types'
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery'

import '../commonStyle.css'

interface IHome {
  exchanges: IExchange[]
}

const Home: React.FC<IHome> = ({ exchanges }) => {
  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP)

  if(isDesktop) 
    return (
      <div className="container">
        <h1>Exchange Table</h1>
        <ExchangeTable exchanges={exchanges} />
      </div>
    )
  else
    return (
      <div className='container'>
        <h2>Exchange Table</h2>
        {exchanges.map(item => (
            <ExchangeItemCard key={`${item.id}`} item={item} />
          ))}
      </div>
    )
}

export default Home
