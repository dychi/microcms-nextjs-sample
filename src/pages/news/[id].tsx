import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client'
import { NewsItem } from '../../types/news'

type Props = {
  news: NewsItem
}

const NewsId: NextPage<Props> = (props) => {
  const { news } = props
  return (
    <main>
      <h1>{news.title}</h1>
      <p>{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.content}`,
        }}
      />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'news' })
  const paths = data.contents.map((content: NewsItem) => `/news/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data = await client.get({ endpoint: 'news', contentId: id })
  return {
    props: {
      news: data,
    },
  }
}

export default NewsId
