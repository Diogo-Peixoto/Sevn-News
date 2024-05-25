export interface IArticle {
  id: string
  title: string
  category: 'EDUCAÇÃO' | 'DIVERSIDADES' | 'ECONOMIA'
  img?: string
  description_seo: string
  pub_date: string
  author: string
  text: string[]
  rank: number
}
