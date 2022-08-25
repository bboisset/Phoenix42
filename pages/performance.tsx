import type { NextPage } from 'next'
import Layout from "../components/layout";
import LogTime from '../components/widgets/logTime/LogTime';

const Dashboard: NextPage = () => {
	
	return (
		<Layout activeMenu='/performance'>
			<LogTime />
		</Layout>
	)
}

export default Dashboard