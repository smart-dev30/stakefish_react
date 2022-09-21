import { SyntheticEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IExchange } from '../../constants/types'

import '../commonStyle.css'

interface IExchangeDetail {
  exchanges: IExchange[]
}

interface Type {
  [key: string]: string | undefined
}

const ExchangeDetail: React.FC<IExchangeDetail> = ({ exchanges }) => {
  const { token } = useParams()
  const exchange = exchanges.find(item => item.name === token)
  const navigate = useNavigate()

  const itemView: Type = {
    Name: exchange?.name,
    Country: exchange?.country,
    Rank: exchange?.trust_score_rank,
    Logo: exchange?.image,
    Established_Year: exchange?.year_established,
    Description: exchange?.description
  }

  const handleGoBack = (e: SyntheticEvent) => {
    e.stopPropagation()
    navigate(-1)
  }

  return (
    <div className="container">
      <h1>Coin Details</h1>
      <table>
        {Object.keys(itemView).map((key: string) => {
          if(key === 'Logo') {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td><img alt='Logo' src={itemView[key]} height={30} width={30} /></td>
              </tr>
            )
          } else {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{itemView[key]}</td>
              </tr>
            )
          }
          
          
        })}
      </table>
      <button onClick={handleGoBack} className='btn'>Back</button>
    </div>
  )
}

export default ExchangeDetail
