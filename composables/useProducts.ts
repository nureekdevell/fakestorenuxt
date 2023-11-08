import { useAsyncData } from "#imports";

export const useProducts = async () => {
  return await useAsyncData("products", () => {
    return $fetch("https://fakestoreapi.com/products");
  });
};
