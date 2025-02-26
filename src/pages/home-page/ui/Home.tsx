import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import HomeBanner from './HomeBanner'
import HomeBigSavingZone from './HomeBigSavingZone'
import HomeCategoriesMan from './HomeCategoriesMan'
import HomeCategoriesWomen from './HomeCategoriesWomen'
import HomeDeals from './HomeDeals'
import HomeNewArrival from './HomeNewArrival'
import HomeTopBrandsDeal from './HomeTopBrandsDeal'
import HomeWeMade from './HomeWeMade'

export default function HomePage() {
	return (
		<>
			<Header />
			<div className='@container w-[1440px] mx-auto'>
				<HomeBanner />
				<HomeDeals />
				<HomeNewArrival />
				<HomeBigSavingZone />
				<HomeWeMade />
				<HomeCategoriesMan />
				<HomeCategoriesWomen />
				<HomeTopBrandsDeal />
			</div>
			<Footer />
		</>
	)
}
