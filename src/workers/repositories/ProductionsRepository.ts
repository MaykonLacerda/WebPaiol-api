import { EntityRepository, Repository } from "typeorm"
import { Production } from "../entities/Production"

@EntityRepository(Production)
class ProductionsRepository extends Repository<Production> {}

export {ProductionsRepository}
