const getBasePath = () => {
  // let base_url =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://weather-umber-seven.vercel.app`;

  return base_url;
};

export default getBasePath;
