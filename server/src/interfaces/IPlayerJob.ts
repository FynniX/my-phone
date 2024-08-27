export interface IPlayerJob {
  id: number,
  name: string,
  label: string,
  grade: number,
  grade_name: string,
  grade_label: string,
  grade_salary: number,
  skin_male: Record<string, number>,
  skin_female: Record<string, number>
}