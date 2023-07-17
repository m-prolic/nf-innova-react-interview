import { perPage } from "./constants";

export const getTotalPages = (totalItems) => Math.ceil(totalItems / perPage);

export const totalPagesValidation = (totalPages) =>
  typeof totalPages == "number" && totalPages > 0 ? totalPages : 1;
