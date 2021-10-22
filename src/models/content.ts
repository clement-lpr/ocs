import { Playinfo } from './playInfo';
import { Playinfoid } from './playInfoId';
import { Title } from './title';

export interface Content {
  title: Title[];
  subtitle: string;
  subtitlefocus: string[];
  imageurl: string;
  fullscreenimageurl: string;
  id: string;
  detaillink: string;
  duration: string;
  playinfoid: Playinfoid;
  playinfo?: Playinfo;
}
