import _ from 'lodash/fp'

import UnstructuredTocItem from '../models/UnstructuredTocItem'
import { emoji, specials, whitespace } from './regex'

export const slugger = (string: string): string => typeof string === 'string'
  ? _.compose(
    _.replace(whitespace, '-'),
    _.replace(emoji, ''),
    _.replace(specials, ''),
    _.trim,
    _.lowerCase,
  )(string)
  : ''

export const getTocCreator = () => {
  const context: { [key: string]: boolean } = {}

  const createSlug = (value: string, n = 0): string => {
    const slug = n === 0 ? value : `${value}-${n}`
    const isDuplicatedSlug = Boolean(context[slug])

    if (isDuplicatedSlug) {
      return createSlug(value, n + 1)
    }

    context[slug] = true

    return slug
  }

  // XXX: any[] 타입 수정 요망
  const createToc = (items: UnstructuredTocItem[], depth = 1, level = 2): any[] => _.map(item => {
    const [, title, slug] = /^(.*?)\s*\{#([\w-]+)\}$/.exec(item.title) ?? [undefined, item.title, createSlug(slugger(item.title))]

    const children = _.compose(
      data => _.concat(data, _.filter<UnstructuredTocItem>(item => Boolean(item.title), item.items)),
      _.flatten,
      _.map(item => item.items),
      _.reject<UnstructuredTocItem>(item => Boolean(item.title)),
    )(item.items)

    return _.pickBy(_.identity, {
      slug,
      title,
      level,
      items: item.items && depth > 1 ? createToc(children, depth - 1, level + 1) : undefined,
    })
  }, items)

  return createToc
}
