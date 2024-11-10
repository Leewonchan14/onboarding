import { QueryClient } from "@tanstack/react-query";

class QUERY_CLIENT {
  private static instance: QueryClient;

  static getInstance(): QueryClient {
    if (!QUERY_CLIENT.instance) {
      QUERY_CLIENT.instance = new QueryClient();
    }
    return QUERY_CLIENT.instance;
  }
}

const queryClient = QUERY_CLIENT.getInstance();

export default queryClient;
