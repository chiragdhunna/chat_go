import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "ChatGo",
  description = "This is the Chat App Called ChatGo",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
};

export default Title;
