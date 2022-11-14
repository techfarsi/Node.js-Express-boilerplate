import { Op } from 'sequelize'
import Post, { PostInput, PostOuput } from '../models/Post'
import { GetAllIngredientsFilters } from './types'

export const create = async (payload: PostInput): Promise<PostOuput> => {
  return Post.create(payload)
}

export const findOrCreate = (payload: PostInput): Promise<[PostOuput, boolean]> => {
  return Post.findOrCreate({
    where: {
      title: payload.title,
    },
    defaults: payload,
  })
}

export const update = async (id: number, payload: Partial<PostInput>): Promise<PostOuput> => {
  const post = await Post.findByPk(id)

  if (!post) {
    throw new Error('not found')
  }

  const updatedPost = await post.update(payload)
  return updatedPost
}

export const getById = async (id: number): Promise<PostOuput> => {
  const post = await Post.findByPk(id)

  if (!post) {
    throw new Error('not found')
  }

  return post
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedPostCount = await Post.destroy({
    where: { id },
  })

  return !!deletedPostCount
}

export const getAll = async (filters?: GetAllIngredientsFilters): Promise<PostOuput[]> => {
  return Post.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  })
}

export const checkSlugExists = async (slug: string): Promise<boolean> => {
  const postWithSlug = await Post.findOne({
    where: {
      slug,
    },
  })

  return !!postWithSlug
}
