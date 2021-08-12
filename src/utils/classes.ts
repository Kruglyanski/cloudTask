//@ts-nocheck
import { Expose, Type } from 'class-transformer'


export class Todo {
  @Expose()
  public checked: boolean

  @Expose({name: 'created_at'})
  @Type(() => Date)
  public createdAt: Date

  @Expose()
  public id: number

  @Expose({name: 'list_id'})
  public listId: number

  @Expose()
  public text: string

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  public updatedAt: Date
}

export class List {
  @Expose({name: 'candidate_id'})
  public candidateId: number

  @Expose({name: 'created_at'})
  @Type(() => Date)
  public createdAt: Date

  @Expose()
  public id: number

  @Expose()
  public title: string

  @Expose()
  @Type(() => Todo)
  public todos: Todo[]

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  public updatedAt: Date

}


