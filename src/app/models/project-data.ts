import {BasicProjectData} from "./basic-project-data";

export interface ProjectData extends BasicProjectData{
  visible: boolean,
  briefDescription: string,
  mainPhoto: string,
  description: string,
}
