export interface ResourceType {
  resourseURI: string;
  name: string;
  type?: string;
}

interface ArrayType {
  available: number;
  collectionURI: string;
  returned: number;
  items: ResourceType[];
}

interface UrlType {
  type: string;
  url: string;
}

interface ThumbnailType {
  extension: string;
  path: string;
}

export interface CharacterType {
  description: string;
  id: number;
  name: string;
  resourceURI: string;
  modified: Date | string;
  comics: ArrayType;
  events: ArrayType;
  series: ArrayType;
  stories: ArrayType;
  thumbnail: ThumbnailType;
  urls: UrlType[];
}