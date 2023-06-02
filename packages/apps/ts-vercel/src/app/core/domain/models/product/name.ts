import { Either, left, right } from '../../../utils/helpers/Either'

import { InvalidNameError } from '../../../utils/helpers/errors/InvalidNameError'

export class Name {
  private readonly name: string

  get value(): string {
    return this.name
  }

  private constructor(name: string) {
    this.name = name
  }

  static validate(name: string): boolean {
    if (!name || name.trim().length < 2 || name.trim().length > 250) {
      return false
    }

    return true
  }

  static create(name: string): Either<InvalidNameError, Name> {
    if (!this.validate(name)) {
      return left(new InvalidNameError(name))
    }

    return right(new Name(name))
  }
}
