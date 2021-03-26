import React, { useContext, useEffect } from "react";
import MyContext from "../../Context/MyContext";
import { Link } from "react-router-dom";
import { Feature } from "../Feature/index";
import {Navbar} from '../Navbar/index'

import {
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroItems,
	HeroP,
	HeroBtn,
	HeroH2,
} from "./HeroElements";
import { CurrentBrands } from "../CurrentBrands/CurrentBrands";

export const Hero = () => {
	const my_Context = useContext(MyContext);
	const { products } = my_Context;

	useEffect(() => {
		// getProducts();
	}, []);

	return (
		<>
			<HeroContainer>
				<Navbar/>
				<HeroContent>
					<HeroItems>
						<HeroH1>Looking for your next Pair of Boots?</HeroH1>
						<HeroP>Stylish, Rugged</HeroP>
						<HeroH2>All Year</HeroH2>
						<Link to="/products">
							<HeroBtn>Check out our Products!</HeroBtn>
						</Link>
					</HeroItems>
				</HeroContent>
			</HeroContainer>
			<CurrentBrands />
			{products.length > 0 && <Feature />}
		</>
	);
};
