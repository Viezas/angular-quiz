export class Question {
  constructor(
    public id: number,
    public title: string,
    public answer: number,
    public categoryId: number,
    public options: string[],
    public video?: string | null,
    public image?: string | null,
  ) {}
}
