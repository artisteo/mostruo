interface Environment {
  NODE_ENV: string;
  NEXT_PUBLIC_DOT_ENV: string | undefined;
}

const useEnvironment = (): Environment => {
  const environment: Environment = {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DOT_ENV: process.env.NEXT_PUBLIC_DOT_ENV,
  };

  return environment;
};

export default useEnvironment;
