// Decorators: facilitar a identificação de fragmentos do código. Atalho para executar determinada ação

import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

// Aqui é entidade
@Entity()
export default class Task extends BaseEntity {
   // exporta para ser possível importar em outro arquivo
  @PrimaryGeneratedColumn()
  id!: number //?=opcional !=obrigatório

  @Column()
  title!: string

  @Column({default: false})
  
  completed!: boolean
}