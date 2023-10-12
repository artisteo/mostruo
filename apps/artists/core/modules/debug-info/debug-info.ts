class DebugInfo {
  public readonly NODE_ENV: string;
  public readonly NEXT_PUBLIC_DOT_ENV: string | undefined;
  constructor() {
    this.NODE_ENV = process.env.NODE_ENV;
    this.NEXT_PUBLIC_DOT_ENV = process.env.NEXT_PUBLIC_DOT_ENV;
  }
}

export default DebugInfo;
