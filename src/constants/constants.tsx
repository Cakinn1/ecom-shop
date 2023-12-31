import { MdOutlineSmartphone } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { RiTShirt2Line } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiHealthPotion } from "react-icons/gi";

export interface CategoryItemsProps {
  image: React.ReactElement;
  title: string;
  amount: number;
}

export const categoryItems: CategoryItemsProps[] = [
  {
    image: <MdOutlineSmartphone className="text-3xl" />,
    title: "Smartphones",
    amount: 5,
  },
  { image: <FaLaptop className="text-3xl" />, title: "Laptops", amount: 5 },
  {
    image: <GiHealthPotion className="text-3xl" />,
    title: "Skincare",
    amount: 5,
  },
  {
    image: <RiTShirt2Line className="text-3xl" />,
    title: "groceries",
    amount: 5,
  },
  {
    image: <IoPricetagsOutline className="text-3xl" />,
    title: "home-decoration",
    amount: 5,
  },
];

export interface CategoryItemsNavProps {
  link: string;
  title: string;
}

export const navCategoryItems: CategoryItemsNavProps[] = [
  {
    title: "Computer & Tablet",
    link: "laptops",
  },
  {
    title: "Cellphone",
    link: "smartphones",
  },
  {
    title: "Accessories",
    link: "automotive",
  },
  {
    title: "WoodStack Watch",
    link: "mens-watches",
  },
  {
    title: "Men's Clothes",
    link: "mens-shirts",
  },
  {
    title: "womens-watches",
    link: "Womens Watches",
  },
];
