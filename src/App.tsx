import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types';
import { NavBar } from '@/Components/NavBar';
import { Home } from '@/Components/Home';
import { Benefits } from '@/Components/Benefits';
import { OurClasses } from './Components/OurClasses';

export const App = () => {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) {
				setIsTopOfPage(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	return (
		<div className="app bg-gray-20">
			<NavBar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
		</div>
	)
};
