import { NextResponse } from "next/server";

export default class HttpResponse<T> {
  static readonly STATUS_OK = 200;
  static readonly STATUS_INTERNAL_SERVER_ERROR = 500;
  static readonly STATUS_BAD_REQUEST = 400;
  static readonly STATUS_UNAUTHORIZED = 401;

  constructor(
    private status: number,
    private payload?: T
  ) {}
  private get(): NextResponse {
    if (typeof this.payload === "undefined")
      return NextResponse.json({}, { status: this.status });
    return NextResponse.json(this.payload, { status: this.status });
  }

  public static OK<T>(payload?: T): NextResponse {
    return new HttpResponse<T | undefined>(this.STATUS_OK, payload).get();
  }
  public static HEALTH(endpoint: string): NextResponse {
    return new HttpResponse<{ endpoint: string; status: string }>(
      this.STATUS_OK,
      {
        endpoint,
        status: "ALIVE",
      }
    ).get();
  }
  public static InternalServerError<T>(payload?: T): NextResponse {
    return new HttpResponse<T | undefined>(
      this.STATUS_INTERNAL_SERVER_ERROR,
      payload
    ).get();
  }
  public static BadRequest<T>(payload?: T): NextResponse {
    return new HttpResponse<T | undefined>(
      this.STATUS_BAD_REQUEST,
      payload
    ).get();
  }
  public static Unauthorized<T>(payload?: T): NextResponse {
    return new HttpResponse<T | undefined>(
      this.STATUS_UNAUTHORIZED,
      payload
    ).get();
  }
}
