// const getAllOrders = async (credentials,{page}) => {
//   return await fetch(`https://dev-api.mstars.mn/api/orders?page=${page}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials ),
//   });
// };
// const registerUser = async (credentials) => {
//   return await fetch("http://52.221.191.153/admin/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
// };

// const userInfoStorage = (userInfo) => {
//   localStorage.setItem("token", userInfo.token);
//   localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
// };
const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const otherServices = {
  getAllFood,
};
