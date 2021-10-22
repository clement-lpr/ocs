import { Content } from './content';
import { Playinfo } from './playInfo';
import { Playinfoid } from './playInfoId';
import { Season } from './season';
import { Title } from './title';

export interface Acontent {
  type: string;
  description: Title[];
  link: string;
  imageurl: string;
  contents: Content[];
}

export interface Zonesinfo {
  duration: number;
  endcreditsautocompleted: boolean;
  endcreditstcin: number;
  endcreditstcout: number;
}
export interface Contents {
  acontents?: Acontent[];
  availability?: Title[];
  bannerinfo?: Title[];
  description?: string[][];
  duration?: string;
  fullscreenimageurl?: string;
  highlefticon?: string[];
  highrighticon?: string[];
  id: string;
  imageurl?: string;
  isbookmarkable?: boolean;
  isdownloadable?: boolean;
  parentalrating?: number;
  pitch?: string;
  playinfo?: Playinfo;
  playinfoid?: Playinfoid;
  seasons?: Season[];
  subtitle?: string;
  subtitlefocus?: string;
  summary?: string;
  title?: Title[];
  zonesinfo?: Zonesinfo;
}

export interface Detail {
  template: string;
  parentalrating: number;
  categoryID: number;
  contents: Contents;
}
