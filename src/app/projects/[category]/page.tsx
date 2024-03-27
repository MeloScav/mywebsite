import { Metadata } from "next";
import React from "react";

interface ICategoryPageProps {
  params: {
    category: string;
  };
}

export const metadata: Metadata = {
  title: "Design",
  description: "Generated by create next app",
};

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;
  const currentCategory = params.category;

  return <h1>Test {currentCategory}</h1>;
};

export default CategoryPage;
