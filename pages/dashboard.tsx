import type { NextPage } from 'next'
import ProgressCard from "../components/widgets/progressCard/ProgressCard";

const Dashboard: NextPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <ProgressCard title="Heures" value="12h43" imageSrc="/clock.png" subTitle='Hebdomadaire' percentage={0.7}/>
    </div>
  )
}

export default Dashboard