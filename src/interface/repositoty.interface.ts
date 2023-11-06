export interface IRepository<Input, Output>{
    excute(input: Input): Promise<Output>
}