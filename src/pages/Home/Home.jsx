import Header from '../../components/Header/Header'
import cls from './Home.module.scss'

export default function Home() {
  return(
    <>
      <div className={cls.Home}>
        <Header />
      </div>
    </>
  )
}