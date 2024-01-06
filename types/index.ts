// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== Van PARAMS
export type CreateVanParams = {
  userId: string;
  van: {
    name: string;
    vanType: string;
    fuelType: string;
    fuelLevel: number;
    chargePercent: number;
    isCharging: boolean;
    maintenance: string;
    isCharged: boolean;
  };
  path: string;
};

export type UpdateVanParams = {
  userId: string;
  van: {
    _id: string;
    name: string;
    vanType: string;
    fuelType: string;
    fuelLevel: number;
    chargePercent: number;
    isCharging: boolean;
    maintenance: string;
    isCharged: boolean;
  };
  path: string;
};

export type DeleteVanParams = {
  vanId: string;
  path: string;
};

export type GetAllVansParams = {
  query: string;
  vanType: string;
  limit: number;
  page: number;
};

export type GetEventsByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type Van = {
  _id: string;
  name: string;
  vanType: string;
  fuelType: string;
  fuelLevel: number;
  chargePercent: number;
  isCharging: boolean;
  maintenance: string;
  isCharged: boolean;
  creator: {
    _id: string;
    firstName: string;
    lastName: string;
  };
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
