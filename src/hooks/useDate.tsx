import { useState } from "react";

const useDate = (dateValue: string) => {
  const dateObj = new Date(dateValue);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
};

export default useDate;
