import type { NextPage } from 'next'
import Layout from "../components/layout";
import ProfilCard from "../components/widgets/profilCard/profilCard";

const Dashboard: NextPage = () => {
	
	return (
		<Layout activeMenu='/settings'>
			<ProfilCard user={{login: 'test', firstname: 'test', lastname: 'test', image_url: '/small_default.png',id:0}} />
		</Layout>
	)
}

export default Dashboard