import { FieldSet, Record } from "airtable";
import { SkillUI } from "models/types";

export const Pages = {
  Home: {path: '/', title: 'Home'},
  AboutMe: {path: '/about-me', title: 'About'},
  Projects: {path: '/projects', title: 'Projects'},
  Resume: {path: '/resume', title: 'Resume'}
}

export const mapSkills = ({id, fields: {Experiences, Projects, fieldOrder, groupOrder, ...skill}}: Record<FieldSet>): SkillUI => ({ id, ...skill } as SkillUI)