import React, { useEffect, useState } from "react";
import Colors from "../../../../assets/Colours.png";
import Stars from "../../../../assets/Stars.png";
import { FurnitureData } from "./FurnitureData";
const FurnitureList = () => {
	const [data, setData] = useState([]);
	const [category, setCategory] = useState([]);
	useEffect(() => {
		setData(FurnitureData);
		setCategory([...new Set(FurnitureData.map((item) => item.category))]);
	}, []);
	const filterCategory = (itemData) => {
		const filterData = FurnitureData.filter(
			(item) => item.category == itemData
		);
		setData(filterData);
	};

	return (
		<div className="px-7">
			<div>
				<ul className="flex items-center flex-row flex-wrap justify-center mx-0 my-auto text-center ">
					<li>
						<button
							className=" focus:bg-clr5 hover:bg-clr5 text-base  bg-clr2 cursor-pointer font-medium px-4 py-2 mx-1 my-2 whitespace-nowrap rounded-[20px] border-none outline-none"
							onClick={() => {
								setData(FurnitureData);
							}}
						>
							All Furnitures
						</button>
					</li>
					{category.map((item) => (
						<li>
							<button
								className=" focus:bg-clr5 hover:bg-clr5 text-base  bg-clr2 cursor-pointer font-medium px-4 py-2 mx-1 my-2 whitespace-nowrap rounded-[20px] border-none outline-none"
								onClick={() => {
									filterCategory(item);
								}}
							>
								{item}
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-wrap justify-center flex-row">
				{data.map((item) => (
					<div
						key={item.id}
						className="flex flex-col p-8 items-center bg-clr6 hover:shadow-3xl hover:bg-white rounded-lg  mx-4 my-3 w-[200px]"
					>
						<div className="flex w-full m-auto ">
							<img src={item.image} alt="" />
						</div>
						<div className=" leading-4 flex flex-col text-left my-3">
							<p className="text-xl font-semibold text-clr1 my-4">
								{item.description}
							</p>
							<div className="flex flex-row">
								<p className="text-xl font-semibold text-clr2 mr-2">$250.00</p>
								<p className="text-xl font-bold text-clr5 ml-2">$210.00</p>
							</div>
							{/* <div className="flex items-center justify-between gap-9">
                <img src={Colors} alt="" className="w-full" />
                <img src={Stars} alt="" className="mb-1 w-full" />
              </div> */}
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center items-center py-5">
				<button className=" bg-clr4 px-9 py-4 rounded-full text-white ">
					See More
				</button>
			</div>
		</div>
	);
};

export default FurnitureList;
