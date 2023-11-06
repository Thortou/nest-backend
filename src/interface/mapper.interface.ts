export interface IMapperPresenter<Entity, Presenter> {
    toPresenter(entity: Entity): Presenter;
}

export interface IMapperDto <Entity, Dto> {
    toEntity(dto: Dto): Entity;
}

export interface IMapper<Entity, Model> {
    toModel(entity: Entity): Model;

    toEntity(model: Model): Entity;
}