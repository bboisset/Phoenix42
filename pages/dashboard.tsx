import type { NextPage } from 'next'
import Head from 'next/head'
import ProgressCard from "../components/widgets/progressCard/ProgressCard";
import Layout from "../components/layout";
import RuleTable from "../components/widgets/ruleTable/RuleTable";
import data from "../components/data.json";

const Dashboard: NextPage = () => {
	
	return (
		<Layout activeMenu='/dashboard'>
			<Head>
				<title>Phoenix Dashboard</title>
			</Head>
			<div style={{display:"flex",justifyContent:"space-between"}} className="widget-container">
			<ProgressCard title="Heures" value="12h43" imageSrc="/clock.png" subTitle='Hebdomadaire' percentage={50} color="var(--yellow)" />
			<ProgressCard title="Evenements" value="3/4" imageSrc="/icons/Emojipopcorn.png" subTitle='Mensuel' percentage={75} color="var(--yellow)" hasOptions={true} />
			<ProgressCard title="Correction" value="0/1" imageSrc="/icons/Emoji.png" subTitle='Mensuel' percentage={0} color="var(--danger)"/>
			<ProgressCard title="Corection pair" value="1/1" imageSrc="/icons/Emojihand.png" subTitle='Bi-Hebdomadaire' percentage={100} color="var(--success)"/>
			</div>
			<RuleTable doneRules={data.user.rules}/>
		</Layout>
	)
}

export default Dashboard