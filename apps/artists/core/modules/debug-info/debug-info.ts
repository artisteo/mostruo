class DebugInfo {
  public readonly NODE_ENV: string;
  public readonly NEXT_PUBLIC_DOT_ENV: string | undefined;
  constructor() {
    // i think this is a turborepo / typescript problem and will get fixed eventually
    // it gives a warning in VSC but not in linting
    this.NODE_ENV = process.env.NODE_ENV;
    this.NEXT_PUBLIC_DOT_ENV = process.env.NEXT_PUBLIC_DOT_ENV;
  }
}

export default DebugInfo;
