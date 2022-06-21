// const getAllOrders = async (credentials,{page}) => {
//   return await fetch(`https://dev-api.mstars.mn/api/orders?page=${page}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials ),
//   });
// };
const deleteFood = async (credentials, id) => {
  console.log(id);
  return await fetch(`https://dev-api.mstars.mn/api/delete/food/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

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
const addFood = async (credentials) => {
  return await fetch("https://dev-api.mstars.mn/api/new/food", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const otherServices = {
  getAllFood,
  deleteFood,
  addFood,
};
