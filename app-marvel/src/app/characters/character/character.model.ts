
export interface Character{
  id?: string
  name?: string
  description?: string
  modified?: string
  thumbnail? : Thumbnail;
}

export class Thumbnail {
  public path: string;
  public extension: string;
}


