export class Blog {
  id = Math.floor(Math.random() * 101);
  title!: string;
  description!: string;
  category!: string;
  user!: string;
  nowdate = new Date();
  // date = `${this.nowdate.getFullYear()}/${this.nowdate.getMonth()}/${this.nowdate.getDay()}`;
  date: any = this.nowdate;
  blog_image!: string;
  user_image!: string;
}
