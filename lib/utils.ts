import { FieldSet, Record } from "airtable";
import { Skill, SkillUI } from "models/types";

export enum Pages {
  Home = '/',
  AboutMe = '/about-me',
  Projects = '/projects'
}

export const mapSkills = ({id, fields: {Experiences, Projects, fieldOrder, groupOrder, ...skill}}: Record<FieldSet>): SkillUI => ({ id, ...skill } as SkillUI)