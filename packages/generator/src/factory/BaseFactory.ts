import { Faker, AnimalDefinitions } from '@faker-js/faker'

type State = Record<string, any>
interface BaseFactoryOptions {
  count?: number
  states?: State
}

export default class BaseFactory {
  protected readonly faker: Faker;

  private count: number = 0;

  private states: State = {};

  constructor(options: BaseFactoryOptions = {}) {
    this.count = options.count || 0
    this.states = options.states || {}
  }

  public define<T>(definition: (faker: Faker) => T): T {
    return definition(this.faker)
  }
}
