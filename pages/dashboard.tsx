import type { NextPage } from 'next'
import ProgressCard from "../components/widgets/progressCard/ProgressCard";
import Layout from "../components/layout";
import RuleTable from "../components/widgets/ruleTable/RuleTable";
import data from "../components/data.json";

const Dashboard: NextPage = () => {
	
	return (
		<Layout>
			<div style={{display:"flex",justifyContent:"space-between"}} className="widget-container">
			<ProgressCard title="Heures" value="12h43" imageSrc="/clock.png" subTitle='Hebdomadaire' percentage={50} />
			<ProgressCard title="Evenements" value="3/4" imageSrc="/icons/Emojipopcorn.png" subTitle='Mensuel' percentage={75} />
			<ProgressCard title="Correction" value="0/1" imageSrc="/icons/Emoji.png" subTitle='Mensuel' percentage={50} />
			<ProgressCard title="Corection pair" value="1/1" imageSrc="/icons/Emojihand.png" subTitle='Bi-Hebdomadaire' percentage={100} />
			</div>
			<RuleTable doneRules={data.user.rules}/>
		</Layout>
	)
}

export default Dashboard