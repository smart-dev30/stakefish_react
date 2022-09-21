import { ExchangeTable } from '../../components'
import { IExchange } from '../../constants/types'

import '../commonStyle.css'

interface IHome {
  exchanges: IExchange[]
}

const Home: React.FC<IHome> = ({ exchanges }) => {
  return (
    <div className="container">
      <h1>Exchange Table</h1>
      <ExchangeTable exchanges={exchanges} />
    </div>
  )
}

export default Home
