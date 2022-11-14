import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../connection'

interface PostAttributes {
  id: number
  title: string
  slug: string
  content: string
  author: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface PostInput extends Optional<PostAttributes, 'id' | 'slug'> {}

export interface PostOuput extends Required<PostAttributes> {}

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {
  public id!: number
  public title!: string
  public slug!: string
  public content!: string
  public author!: string

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeConnection,
    paranoid: true,
  }
)

export default Post
