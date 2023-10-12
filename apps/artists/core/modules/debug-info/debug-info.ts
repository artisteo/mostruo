class DebugInfo {
  public readonly enviroment: string;
  public readonly NEXT_PUBLIC_DOT_ENV: string | undefined;
  constructor() {
    this.enviroment = process.env.NODE_ENV;
    this.NEXT_PUBLIC_DOT_ENV = process.env.NEXT_PUBLIC_DOT_ENV;
  }
}

export default DebugInfo;
