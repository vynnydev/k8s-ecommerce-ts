/* eslint-disable no-useless-constructor */
import { Entity } from '../../core/Entity'
import { Either, right } from '../../../utils/helpers/Either'

import { Name } from './name'
import { EVisibility } from '../enums/EVisibility'
import { InvalidNameError } from '@/app/core/utils/helpers/errors/InvalidNameError'

interface IProductProps {
  slug: string
  name: Name
  description: string
  price: number
  isAvailable: boolean
  visibility: EVisibility
  pictures: string[]
  extras: string | null
  categoryId: string
  lineItemId: string | null
  createdAt: Date
  updatedAt: Date
}

export class Product extends Entity<IProductProps> {
  get name() {
    return this.props.name
  }

  get slug() {
    return this.props.slug
  }

  get description() {
    return this.props.description
  }

  get price() {
    return this.props.price
  }

  get isAvailable() {
    return this.props.isAvailable
  }

  get visibility() {
    return this.props.visibility
  }

  get pictures() {
    return this.props.pictures
  }

  get extras() {
    if (!this.props.extras) throw new Error()
    return this.props.extras
  }

  get categoryId() {
    return this.props.categoryId
  }

  get lineItemId() {
    if (!this.props.lineItemId) throw new Error()
    return this.props.lineItemId
  }

  get createdAt() {
    return this.props.createdAt
  }

  set name(name: Name) {
    this.props.name = name
  }

  set slug(slug: string) {
    this.props.slug = slug
  }

  set description(description: string) {
    this.props.description = description
  }

  set price(price: number) {
    this.props.price = price
  }

  set isAvailable(isAvailable: boolean) {
    this.props.isAvailable = isAvailable
  }

  set visibility(visibility: EVisibility) {
    this.props.visibility = visibility
  }

  set pictures(pictures: string[]) {
    this.props.pictures = pictures
  }

  set extras(extras: string) {
    this.props.extras = extras
  }

  set categoryId(categoryId: string) {
    this.props.categoryId = categoryId
  }

  set lineItemId(lineItemId: string) {
    this.props.lineItemId = lineItemId
  }

  public unsetAsDefault() {
    this.props.isAvailable = false
  }

  public setAsDefault() {
    this.props.isAvailable = true
  }

  private constructor(props: IProductProps, id?: string) {
    super(props, id)
  }

  static create(
    props: IProductProps,
    id?: string,
  ): Either<InvalidNameError, Product> {
    const product = new Product(
      {
        ...props,
        isAvailable: props.isAvailable || false,
      },
      id,
    )

    return right(product)
  }
}
