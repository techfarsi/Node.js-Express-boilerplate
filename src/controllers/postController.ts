import express, { Request, Response, Errback } from 'express'
import { getAll, create, update, getById, deleteById } from '../db/dal/post'
import { successResponse, failResponse } from '../utils/response'

export const createPost = (req: Request, res: Response) => {
  try {
    create({
      title: req.body.title,
      slug: req.body.slug,
      author: req.body.author,
      content: req.body.content,
    }).then((data) => {
      res.status(201).json(successResponse('post', data))
    })
  } catch (error) {
    res.status(400).json(failResponse(error.message))
  }
}

export const updatePost = (req: Request, res: Response) => {
  try {
    let { id } = req.params

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json(failResponse('The id is not valid.'))
    }

    update(parseInt(id), {
      title: req.body.title,
      slug: req.body.slug,
      author: req.body.author,
      content: req.body.content,
    }).then((data) => {
      res.status(200).json(successResponse('post', data))
    })
  } catch (error) {
    res.status(400).json(failResponse(error.message))
  }
}

export const getAllPost = (req: Request, res: Response) => {
  try {
    getAll().then((posts) => {
      res.status(200).json(successResponse('posts', posts))
    })
  } catch (error) {
    res.status(400).json(failResponse(error.message))
  }
}

export const getPostById = (req: Request, res: Response) => {
  try {
    let { id } = req.params

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json(failResponse('The id is not valid.'))
    }

    getById(parseInt(id)).then((data) => {
      res.status(200).json(successResponse('post', data))
    })
  } catch (error) {
    res.status(400).json(failResponse(error.message))
  }
}

export const deletePostById = (req: Request, res: Response) => {
  try {
    let { id } = req.params

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json(failResponse('The id is not valid.'))
    }

    deleteById(parseInt(id)).then(() => {
      res.status(200).json(successResponse('post', null, 'Post deleted.'))
    })
  } catch (error) {
    res.status(400).json(failResponse(error.message))
  }
}
